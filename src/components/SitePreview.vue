<template>
    <section class="site-preview">
        <h1><router-link :to="'/'+site._id">{{site.name}}</router-link></h1>
        <router-link :to="'/'+site._id"><img :src="site.thumb"></router-link>
    </section>
</template>

<script>
export default {
  name: "site-nav",
  props: ["site"],
};
</script>
<style scoped>
h1 span {
  font-size: 15px;
  padding-left: 12px;
}
</style>


