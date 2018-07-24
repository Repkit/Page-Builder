<template>
    <section class="site-preview">
        Hello this is a preview,
        <h1>Name:<span>{{site.name}}</span></h1>
        <img :src="site.thumb">
    </section>
</template>

<script>
export default {
  props: ["site"],
  name: "site-nav"
};
</script>
<style scoped>
h1 span{
    font-size: 15px;
    padding-left: 12px;
}
</style>


