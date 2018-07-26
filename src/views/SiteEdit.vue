<template>
    <Split style="height: 100vh;">

        <SplitArea :size="15" :minSize="100">

            <site-editor></site-editor>

        </SplitArea>

        <SplitArea :size="85">

            <div v-if="site">

                <component v-if="site.elements" v-for="element in site.elements"
                    :key="element._id" :is="element.settings.type+'-widget'" :element="element">
                </component>

            </div>

        </SplitArea>

    </Split>
</template>

<script>
import VueSplit from 'vue-split-panel'
import SiteService from '@/services/SiteService.js';
import SiteEditor from "@/components/SiteEditor.vue";

import SectionWidget from '@/components/widgets/SectionWidget.vue';
import TextWidget from '@/components/widgets/TextWidget.vue';
import ImageWidget from '@/components/widgets/ImageWidget.vue';
import ListWidget from '@/components/widgets/ListWidget.vue';
import MapWidget from '@/components/widgets/MapWidget.vue';
import ButtonWidget from '@/components/widgets/ButtonWidget.vue';
import ProgressBarWidget from '@/components/widgets/ProgressBarWidget.vue';
import AcordionGroupWidget from '@/components/widgets/AcordionGroupWidget.vue';

export default {
    name: 'site-edit',
    components: {
        SiteEditor,
        SectionWidget,
        TextWidget,
        ImageWidget,
        ListWidget,
        MapWidget,
        ButtonWidget,
        ProgressBarWidget,
        AcordionGroupWidget
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
				.then(site => {
                    this.site = site;
                })
                .catch(err => {
                    this.$router.push('/notfound');
                });
        }
	}
};
</script>

<style scoped>
.widget:hover {
    border: 3px solid lightskyblue;
    outline: 3px solid lightskyblue;
}
</style>