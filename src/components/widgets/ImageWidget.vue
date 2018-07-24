<template>
    <div class="widget image-widget" :style="styles">

        <img :src="data.src" :alt="data.alt" />

    </div>
</template>

<script>
export default {
    name: 'image-widget',
    props: [ 'data', 'styles' ],
};
</script>
