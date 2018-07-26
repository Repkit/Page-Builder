<template>
    <div class="element map-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }">

        MAP WIDGET

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'map-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
