<template>
    <div class="editor-site-details" v-if="site">

        <h2>Edit Site</h2>

        <div class="content">
            <p><strong>ID:</strong> {{site._id}}</p>
            <img :src="site.thumb" />
            <p><strong>{{site.name}}</strong></p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'editor-site-details',
    props: [ 'site' ],
};
</script>

<style scoped lang="scss">
.editor-site-details {
    padding: 0 0 10px;

    .content {
        padding: 0 5px;

        img {
            margin: 0 auto;
        }
    }
}
</style>
