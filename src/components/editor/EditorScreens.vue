<template>
    <section class="editor-screens">

        <editor-add-section v-if="screen === 'editor-add-section'" />
        <editor-add-element v-if="screen === 'editor-add-element'" />
        <editor-edit-element v-if="screen === 'editor-edit-element' && selectedElement" :element="selectedElement" />
        <editor-elements-tree v-if="screen === 'editor-elements-tree' && site" :site="site" :selected="selectedElement" />
        <editor-site-details v-if="screen === 'editor-site-details' && site" :site="site" />

    </section>
</template>

<script>
import EditorService from '@/services/EditorService.js';
import EditorAddSection from '@/components/editor/screens/EditorAddSection.vue';
import EditorAddElement from '@/components/editor/screens/EditorAddElement.vue';
import EditorEditElement from '@/components/editor/screens/EditorEditElement.vue';
import EditorElementsTree from '@/components/editor/screens/EditorElementsTree.vue';
import EditorSiteDetails from '@/components/editor/screens/EditorSiteDetails.vue';

export default {
    name: 'editor-screens',
    props: [ 'site' ],
    components: { EditorAddSection, EditorAddElement, EditorEditElement, EditorElementsTree, EditorSiteDetails },
    computed: {
        screen() {
            return this.$store.getters.editorScreen;
        },
        selectedElement() {
            return (this.site && this.site._id)
                ? this.$store.getters.selectedElement
                : null;
        }
    },
    methods: {
        addElement(elementType) {
            this.site.elements.push(EditorService.emptyElement(elementType));
        }
    }
};

// Search Using: https://vuejs.org/v2/guide/transitions.html#Staggering-List-Transitions
</script>

<style lang="scss">
.editor-screens {
    cursor: default;

    > div {
        background-color: #fff;
        margin-bottom: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        h2 {
            margin: 0;
            padding: 10px 0;
            font-size: 0.85em;
            font-weight: bold;
            line-height: 1.1;
            text-align: center;
            border-bottom: 1px solid #ccc
        }

        h3 {
            margin: 0 0 10px;
            padding: 10px 0;
            font-size: 0.85em;
            font-weight: bold;
            line-height: 1.1;
        }

        .content {
            padding: 0 5px;
        }
    }

    &.selected-element {
      p {
        text-align: left;
      }
    }
}
</style>