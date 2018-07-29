<template>
    <div class="editor-elements-tree">

        <h2>Elements Tree</h2>

<<<<<<< HEAD
        <div class="tree-container" v-html="tree"></div>
=======
        <div class="content">
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
            </ul>
        </div>
>>>>>>> 91a79b78cac17e4cec4ba014e193aea3f834182d

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

