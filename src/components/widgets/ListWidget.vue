<template>
    <div class="widget list-widget" :style="element.styles">

        {{element.data.text}}

    </div>
</template>

<script>
export default {
    name: 'list-widget',
    props: [ 'element' ],
};
</script>
