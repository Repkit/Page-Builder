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

    </aside>
</template>

<script>
export default {
    name: 'site-editor',
};
</script>

<style scoped>
.site-editor {
    background-color: #333;
    color: #eee;
    height: 100vh;
}
h1 {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    text-align: center;
    border-bottom: 1px solid #eee;
}
</style>
