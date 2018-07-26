<template>
    <div class="element acordion-group-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }">

        <section class="accordion-group" v-for="item in items" :key="item.id"> -->
            <section class="accordion-container" @click="toggleIsShown(item)">
                <div name="title">{{item.name}}</div>
                <div name="content" v-if="item.isShown">{{item.content}}</div>
            </section>
        </section>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'acordion-group-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    methods: {
        toggleIsShown(item) {
            item.isShown = !item.isShown;
        }
    },
    data() {
        return {
            items:[
                { id: 'sdsd', name: 'Gali', content: 27, isShown: false },
                { id: 'qdsc', name: 'Idan', content: 28, isShown: false },
                { id: 'sdsw', name: 'Ofir', content: 24, isShown: false }
            ],
        };
    },
    created() {
        if (this.element.element.data.isArray()) this.items = this.element.element.data;
    }
};
</script>

<style scoped>
.accordion-container{
    text-align: center;
}
.acordion-group-element {
    width: 36vw;
    margin: 0 auto;
}
.accordion-group {
    cursor: pointer;
    border: 1px solid black;
}
</style>
