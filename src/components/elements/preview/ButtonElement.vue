<template>
    <button class="element button-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }">

        {{element.data.text}}

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </button>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'button-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
