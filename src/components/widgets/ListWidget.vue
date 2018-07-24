<template>
    <div class="widget list-widget" :style="styles">

        {{data.text}}

    </div>
</template>

<script>
export default {
    name: 'list-widget',
    props: [ 'data', 'styles' ],
};
</script>
