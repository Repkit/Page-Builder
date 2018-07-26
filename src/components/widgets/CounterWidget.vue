<template>
    <div class="widget button-widget" :style="element.styles"
        :class="{ ['widget-'+element._id]: element._id, selected: isEditMode }">

        <button @click="inc">+</button>
            {{element.data.text}}
        <button @click="dec">-</button>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/ElementActions.vue';

export default {
    name: 'button-widget',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        inc() {
            this.counter++;
        },
        dec() {
            if(this.counter === 0) return
            this.counter--
        }
    }
};
</script>
