<template>
    <div class="widget map-widget" :style="element.styles"
        :class="{ ['widget-'+element._id]: element._id, selected: isEditMode }">

        MAP WIDGET

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/ElementActions.vue';

export default {
    name: 'map-widget',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
