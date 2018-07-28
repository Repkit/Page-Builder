<template>
    <section class="editor-screens">

        <div class="add-new-section">
            <h2 @click="addElement('section')">Add New Section</h2>
        </div>

        <div class="add-new-elements">
            <h2>Elements List</h2>
            <elements-list />
        </div>

        <!-- <div class="elements-tree" v-if="site">
            <h2>Element Tree</h2>
            <elements-tree :site="site" :selected="selectedElement" />
        </div> -->

        <div class="selected-element" v-if="selectedElement">
            <h2>Selected Element</h2>
            <element-form :element="selectedElement" />
        </div>

    </section>
</template>

<script>
import EditorService from '@/services/EditorService.js';
import ElementForm from '@/components/editor/screens/ElementForm.vue';
import ElementsList from '@/components/editor/screens/ElementsList.vue';
import ElementsTree from '@/components/editor/screens/ElementsTree.vue';

export default {
    name: 'editor-screens',
    props: [ 'site', 'selected' ],
    components: { ElementForm, ElementsList, ElementsTree },
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

<style scoped lang="scss">
.editor-screens {
    padding: 0;
    cursor: default;

    > div {
        text-align: center;
        background-color: #fff;
        margin-bottom: 10px;
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