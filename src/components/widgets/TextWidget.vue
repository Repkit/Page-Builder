<template>
    <div class="widget text-widget" :style="element.styles">

        {{element.data.text}}

    </div>
</template>

<script>
export default {
    name: 'text-widget',
    props: [ 'element' ],
};
</script>
