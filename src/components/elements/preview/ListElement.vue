<template>
    <div class="element list-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }">

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
        return{
            items: null
        }
    },
    created() {
        this.items = this.element.data.text;
    }
};
</script>
