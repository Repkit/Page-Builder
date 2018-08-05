<template>
    <div class="editor-elements-tree-item" v-if="elements">

        <ul class="tree" v-for="element in elements" :key="element._id">
            <li v-if="element.settings.type">
                <span @click="editElement(element._id)"> {{element.settings.type}} </span>
            </li>
            <li v-if="element.elements" class="inner">
                <editor-elements-tree-item :elements="element.elements" />
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'editor-elements-tree-item',
    props: [ 'elements' ],
    computed: {
        site() {
            return this.$store.getters.site;
        }
    },
    methods: {
        editElement(id) {
            this.$store.commit({ type: 'updateSelectedElementById', site: this.site, id: id });
            this.$store.commit({ type: 'setEditorScreen', screen: 'editor-edit-element' });
        }
    }
};
</script>

<style lang="scss">
ul.tree {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    text-transform: capitalize;
    font-weight: bold;

    li {
        background-color: #eee;
        border: 1px solid #ddd;
        margin: 3px 0;
        padding: 5px 10px;

        span {
            cursor: pointer;

            &:hover > span {
                color: #F66;
            }
        }

        &.inner {
            background-color: transparent;
            border: 0;
            padding: 0;
        }

        ul {
            padding-left: 25px;
        }
    }
}
</style>
