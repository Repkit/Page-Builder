<template>
    <div class="element acordion-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <section class="accordion" v-for="item in element.data.acordion" :key="item.id">
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
    name: 'acordion-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    methods: {
        toggleIsShown(item) {
            item.isShown = !item.isShown;
        }
    }
};
</script>

<style scoped>
.accordion-container {
    text-align: center;
}
.acordion-element {
    width: 36vw;
    margin: 0 auto;
}
.accordion {
    cursor: pointer;
    border: 1px solid black;
}
</style>
