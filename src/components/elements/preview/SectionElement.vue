<template>
    <div :class="elementClass" :style="elementStyle"  @mouseover="updateSelectedElement()" >

        <component v-if="element.elements" v-for="element in element.elements" :key="element._id"
            :is="element.settings.type+'-element'" :element="element" :isEditMode="isEditMode">
        </component>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

import SectionElement from '@/components/elements/preview/SectionElement.vue';
import TextElement from '@/components/elements/preview/TextElement.vue';
import ImageElement from '@/components/elements/preview/ImageElement.vue';
import ListElement from '@/components/elements/preview/ListElement.vue';
import MapElement from '@/components/elements/preview/MapElement.vue';
import ButtonElement from '@/components/elements/preview/ButtonElement.vue';
import ProgressBarElement from '@/components/elements/preview/ProgressBarElement.vue';
import AcordionGroupElement from '@/components/elements/preview/AcordionGroupElement.vue';
import CounterElement from '@/components/elements/preview/CounterElement.vue';

export default {
    name: 'section-element',
    props: [ 'element', 'isEditMode' ],
    components: {
        ElementActions,
        SectionElement,
        TextElement,
        ImageElement,
        ListElement,
        MapElement,
        ButtonElement,
        ProgressBarElement,
        AcordionGroupElement,
        CounterElement
    },
    methods:{
        updateSelectedElement(){
            console.log('mouseOver')
            // this.$store.commit({ type: "updateSelectedElement",id});
        }
    },
    computed: {
        elementClass() {
            let classes = `element section-element element-${this.element._id}`;
            classes += (this.isEditMode) ? 'selected' : '';
            return classes;
        },
        elementStyle() {
            let dir = this.element.data.direction
            this.element.styles.flexDirection = (dir) ? dir : 'column';
            return this.element.styles;
        }
    }
};
</script>

<style scoped lang="scss">
.section-element {
    width: 100%;
    display: flex;

    > div {
        flex-grow: 1;
    }
}
</style>
