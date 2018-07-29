<template>
    <div class="editor-site-details" v-if="site">

        <h2>Site Details</h2>

        <div class="content">
            <!-- <p><strong>ID:</strong> {{site._id}}</p> -->
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
    text-align: center;

    img {
        margin: 0 auto;
    }
}
</style>
