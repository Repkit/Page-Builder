<template>
    <div class="editor-elements-tree editor-box">

        <h2>Elements Tree</h2>

        <div class="content">
            <editor-elements-tree-item :elements="site.elements" />
        </div>

    </div>
</template>

<script>
import EditorElementsTreeItem from '@/components/editor/screens/EditorElementsTreeItem.vue';

export default {
    name: 'editor-elements-tree',
    props: [ 'site' ],
    components: { EditorElementsTreeItem },
};
</script>
