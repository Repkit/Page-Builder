<template>
    <div class="widget button-widget" :style="element.styles">

        <button>{{element.data.text}}</button>

    </div>
</template>

<script>
export default {
    name: 'button-widget',
    props: [ 'element' ],
};
</script>
