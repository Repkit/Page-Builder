<template>
    <aside class="editor flex flex-column">

        <editor-header class="flex-dont-shrink" />
        <editor-nav class="flex-dont-shrink" />
        <editor-screens class="flex-shrink flex-grow" :site="site" />
        <editor-footer class="flex-dont-shrink" :site="site" />

    </aside>
</template>

<script>
import EditorHeader from '@/components/editor/EditorHeader.vue';
import EditorNav from '@/components/editor/EditorNav.vue';
import EditorScreens from '@/components/editor/EditorScreens.vue';
import EditorFooter from '@/components/editor/EditorFooter.vue';

export default {
    name: 'editor',
    props: [ 'site' ],
    computed: {
    },
    components: { EditorHeader, EditorNav, EditorScreens, EditorFooter }
};
</script>

<style lang="scss">
.editor {
    background-color: #e3e6e9;
    color: #333;
    height: 100vh;
    transition: 0.3s;
}
</style>
