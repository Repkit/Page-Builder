<template>
    <div class="element image-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <img :src="element.data.src" :alt="element.data.alt" />

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'image-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>

<style scoped>
img {
    display: inline-block;
}
</style>