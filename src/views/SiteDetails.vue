<template>
    <div class="site-details">

        <div v-if="site">
            <component v-if="site.sections" v-for="(section, idx) in site.sections"
                :key="idx" :is="section.settings.type+'-widget'" :data="section.data" :styles="section.styles">
            </component>
        </div>
        <div v-else>
            Site Not Found.
        </div>

    </div>
</template>

<script>
import SiteService from '@/services/SiteService.js';
import TextWidget from '@/components/widgets/TextWidget.vue';
import ImageWidget from '@/components/widgets/ImageWidget.vue';
import ListWidget from '@/components/widgets/ListWidget.vue';
import MapWidget from '@/components/widgets/MapWidget.vue';

export default {
    name: 'site-details',
    components: {
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
                sections: null,
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
