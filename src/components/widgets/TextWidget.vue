<template>
    <div class="widget text-widget" :style="styles">

        {{data.text}}

    </div>
</template>

<script>
export default {
    name: 'text-widget',
    props: [ 'data', 'styles' ],
};
</script>
