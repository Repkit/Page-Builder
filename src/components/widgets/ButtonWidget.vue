<template>
    <button class="widget button-widget" :style="element.styles"
        :class="{ ['widget-'+element._id]: element._id, selected: isEditMode }">

        {{element.data.text}}

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </button>
</template>

<script>
import ElementActions from '@/components/ElementActions.vue';

export default {
    name: 'button-widget',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
