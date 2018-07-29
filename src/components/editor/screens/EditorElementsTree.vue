<template>
    <div class="editor-elements-tree">

        <h2>Elements Tree</h2>

        <div class="tree-container" v-html="tree"></div>

    </div>
</template>

<script>
import EditorService from '@/services/EditorService.js';

export default {
    name: 'editor-elements-tree',
    props: [ 'site' ],
    computed: {
        tree() {
            return EditorService.getSiteTree(this.site.elements);
        }
    }
};
</script>

<style>
.section-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin:5px;
    background-color: #eeeeee;
    font-size: 30px;
    text-transform: capitalize;
}
</style>

