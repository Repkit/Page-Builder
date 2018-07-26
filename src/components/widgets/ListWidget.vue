<template>
    <div class="widget list-widget" :style="element.styles"
        :class="{ ['widget-'+element._id]: element._id, selected: isEditMode }">

        <div v-for="item in items" :key="item.id">
            {{item}}
        </div>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/ElementActions.vue';

export default {
    name: 'list-widget',
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
