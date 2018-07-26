<template>
    <Split class="site-edit" v-if="site">

        <SplitArea :size="15" :minSize="100">

            <site-editor :site="site" :selected="selectedElement" @add-element="addElement"></site-editor>

        </SplitArea>

        <SplitArea :size="85">

            <component v-if="site.elements" v-for="element in site.elements"
                :key="element._id" :is="element.settings.type+'-widget'" :element="element" :isEditMode="true">
            </component>

            <div class="add-section" @click="addElement('section')">
                Add New Section
            </div>

        </SplitArea>

    </Split>
</template>

<script>
import VueSplit from 'vue-split-panel'
import SiteService from '@/services/SiteService.js';
import EditorService from '@/services/EditorService.js';
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
            },
            selectedElement: 'ccccccccccccccccccccc'
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
        },
        addElement(elementType) {
            this.site.elements.push(EditorService.emptyElement(elementType));
        }
	}
};
</script>

<style lang="scss">
.site-edit {
    height: 100vh; /* required for split */

    .widget {
        position: relative;

        .element-actions {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            display: none;
        }

        &:hover {
            outline: 2px solid lightskyblue;

            > .element-actions {
                display: block;
            }
        }

        // .selected {
        //     outline: 2px solid lightcoral;
        // }
    }

    .add-section {
        margin: 1em 3em;
        padding: 2em 0;
        border: 3px dashed #aaa;
        background-color: #fff;
        color: #333;
        text-align:center;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: #f6f6f6;
        }
    }
}
</style>
