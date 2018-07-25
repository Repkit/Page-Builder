<template>
    <div class="site-preview">

        <h3><router-link :to="'/'+site._id">{{site.name}}</router-link></h3>

        <router-link :to="'/'+site._id"><img :src="site.thumb"></router-link>

    </div>
</template>

<script>
export default {
    name: 'site-preview',
    props: [ 'site' ],
};
</script>

<style>
.site-preview {
    margin: 10px;
    padding: 25px;
    align-items: center;
    border: 2px solid #00000014;
    width: 300px;
}
h3 {
    text-align: center;
    display: block;
    margin-top: 0;
}
</style>
