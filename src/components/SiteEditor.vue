<template>
    <aside class="site-editor">

        <h1>Page Builder</h1>

        <div class="site-editor-inner">
            <div>Publish</div>
            <div>Save</div>
            <div>Update</div>
            <div>Delete</div>
            <div>Preview</div>
        </div>

        <div class="new-section">
            <div @click="$emit('add-element', 'section')">Add New Section</div>
        </div>

    </aside>
</template>

<script>
export default {
    name: 'site-editor',
};
</script>

<style scoped lang="scss">
.site-editor {
    background-color: #333;
    color: #eee;
    height: 100vh;

    h1 {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        text-align: center;
        border-bottom: 1px solid #eee;
    }

    > div {
        border-bottom: 1px solid #eee;
        padding-bottom: 1em;
        margin-bottom: 1em;
    }
}
</style>
