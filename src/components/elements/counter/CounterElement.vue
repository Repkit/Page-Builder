<template>
    <div class="element counter-element" :style="element.styles">

        <button @click="inc">+</button>
            Counter: {{counter}}
        <button @click="dec">-</button>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'counter-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    data() {
        return {
            counter: this.element.data.counter || 10
        }
    },
    methods: {
        inc() {
            this.counter++;
        },
        dec() {
            if (this.counter === 0) return
            this.counter--
        }
    }
};
</script>
