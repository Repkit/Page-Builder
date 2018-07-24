<template>
    <div class="site-details">

        <template v-if="site">

            <component v-if="site.elements" v-for="element in site.elements"
                :key="element._id" :is="element.settings.type+'-widget'" :element="element">
            </component>

        </template>
        <template v-else>

            Site Not Found.

        </template>

    </div>
</template>

<script>
import SiteService from '@/services/SiteService.js';

import SectionWidget from '@/components/widgets/SectionWidget.vue';
import TextWidget from '@/components/widgets/TextWidget.vue';
import ImageWidget from '@/components/widgets/ImageWidget.vue';
import ListWidget from '@/components/widgets/ListWidget.vue';
import MapWidget from '@/components/widgets/MapWidget.vue';

export default {
    name: 'site-details',
    components: {
        SectionWidget,
        TextWidget,
        ImageWidget,
        ListWidget,
        MapWidget
    },
    data() {
        return {
            site: {
                name: '',
                thumb: '',
                date: {},
                elements: null,
            }
        }
    },
    created() {
		this.loadSite();
    },
	methods: {
		loadSite() {
			this.$store.dispatch({ type: 'loadSite', id: this.$route.params.siteId })
				.then(site => this.site = site);
        }
	}
};
</script>
