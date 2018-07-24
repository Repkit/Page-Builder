<template>
    <div class="widget image-widget" :style="element.styles">

        <img :src="element.data.src" :alt="element.data.alt" />

    </div>
</template>

<script>
export default {
    name: 'image-widget',
    props: [ 'element' ],
};
</script>
