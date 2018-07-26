<template>
    <div class="widget image-widget" :style="element.styles"
        :class="{ ['widget-'+element._id]: element._id, selected: isEditMode }">

        <img :src="element.data.src" :alt="element.data.alt" />

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/ElementActions.vue';

export default {
    name: 'image-widget',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
