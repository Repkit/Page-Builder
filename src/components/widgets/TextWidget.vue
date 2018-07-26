<template>
    <div class="widget text-widget" :style="element.styles"
        :class="{ ['widget-'+element._id]: element._id, selected: isEditMode }">

        {{element.data.text}}

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/ElementActions.vue';

export default {
    name: 'text-widget',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
