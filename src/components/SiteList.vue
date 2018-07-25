<template>
    <div class="site-list">

        <div v-if="sites" v-for="site in sites" :key="site._id">
            <site-preview :site="site"></site-preview>
        </div>

    </div>
</template>

<script>
import SitePreview from "@/components/SitePreview.vue";

export default {
    name: 'site-list',
    props: [ 'sites' ],
    components: { SitePreview },
};
</script>

<style>
.site-list {
    clear: both;
    display: flex;
    flex-wrap: wrap;
}
</style>
