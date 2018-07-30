<template>
    <button class="element button-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        {{text}}

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </button>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'button-element',
    props: [ 'element', 'isEditMode' ],
    computed: {
        text() {
            return this.element.data.text || 'Click here';
        }
    },
    components: { ElementActions },
};
</script>
