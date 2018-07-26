<template>
    <Split class="site-edit" v-if="site">

        <SplitArea :size="15" :minSize="100">

            <site-editor :site="site" :selected="selectedElement" @add-element="addElement"></site-editor>

        </SplitArea>

        <SplitArea :size="85">

            <component v-if="site.elements" v-for="element in site.elements"
                :key="element._id" :is="element.settings.type+'-element'" :element="element" :isEditMode="true">
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

import SectionElement from '@/components/elements/preview/SectionElement.vue';
import TextElement from '@/components/elements/preview/TextElement.vue';
import ImageElement from '@/components/elements/preview/ImageElement.vue';
import ListElement from '@/components/elements/preview/ListElement.vue';
import MapElement from '@/components/elements/preview/MapElement.vue';
import ButtonElement from '@/components/elements/preview/ButtonElement.vue';
import ProgressBarElement from '@/components/elements/preview/ProgressBarElement.vue';
import AcordionGroupElement from '@/components/elements/preview/AcordionGroupElement.vue';

export default {
    name: 'site-edit',
    components: {
        SiteEditor,
        SectionElement,
        TextElement,
        ImageElement,
        ListElement,
        MapElement,
        ButtonElement,
        ProgressBarElement,
        AcordionGroupElement
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

    .element {
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
