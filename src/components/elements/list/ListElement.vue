<template>
    <div class="element list-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <div v-for="item in items" :key="item.id">
            {{item}}
        </div>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'list-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    data() {
        return {
            items: this.element.data.text || [ 'Item #1', 'Item #2', 'Item #3' ]
        }
    },
};
</script>
