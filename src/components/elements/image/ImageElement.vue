<template>
    <div class="element image-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <img :src="src" :alt="element.data.alt" :data-element-id="element._id"/>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'image-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    computed: {
        src() {
            return this.element.data.src || 'http://via.placeholder.com/1200x600?text=My%20Awsome%20Image'
        }
    }
};
</script>

<style scoped>
img {
    display: inline-block;
}
</style>