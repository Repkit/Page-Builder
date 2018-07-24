<template>
    <section class="site-preview">
        Hello this is a preview,
        <h1>name:{{site.name}}</h1>
        <img :src="site.thumb">
        {{site}}

    </section>
</template>

<script>
export default {
  props: ["site"],
  name: "site-nav"
};
</script>
