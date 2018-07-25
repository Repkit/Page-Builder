<template>
    <button class="widget button-widget" :style="element.styles">

        {{element.data.text}}

    </button>
</template>

<script>
export default {
    name: 'button-widget',
    props: [ 'element' ],
};
</script>
