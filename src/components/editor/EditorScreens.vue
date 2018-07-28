<template>
    <section class="editor-screens">
        <div v-if="status === 'Section'">
            <editor-add-section />
        </div>

        <div v-if="status === 'Element'">
            <editor-add-element />
            <editor-edit-element v-if="selectedElement" :element="selectedElement" />
        </div>

        <div v-if="status === 'Tree'">
            <editor-elements-tree v-if="site" :site="site" :selected="selectedElement" />
        </div>

    </section>
</template>

<script>
import EditorService from '@/services/EditorService.js';
import EditorAddSection from '@/components/editor/screens/EditorAddSection.vue';
import EditorAddElement from '@/components/editor/screens/EditorAddElement.vue';
import EditorEditElement from '@/components/editor/screens/EditorEditElement.vue';
import EditorElementsTree from '@/components/editor/screens/EditorElementsTree.vue';

export default {
    name: 'editor-screens',
    props: [ 'site', 'selected','status' ],
    components: { EditorAddSection, EditorAddElement, EditorEditElement, EditorElementsTree },
    computed: {
        selectedElement() {
            return (this.site && this.site._id)
                ? EditorService.getSelectedElementById(this.site, this.selected)
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
        text-align: center;
        background-color: #fff;
        margin-bottom: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        h2 {
            margin: 0;
            padding: 10px 0;
            font-size: 0.85em;
            line-height: 1.1;
            text-align: center;
            border-bottom: 1px solid #ccc
        }
    }

    &.selected-element {
      p {
        text-align: left;
      }
    }
}
</style>