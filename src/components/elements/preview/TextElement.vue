<template>
    <div class="element text-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }">

        {{element.data.text}}

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'text-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
};
</script>
