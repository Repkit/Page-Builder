<template>
    <div v-if="element" :class="elementClass" :style="elementStyle" :data-element-id="element._id">

        <component v-if="element.elements" v-for="elem in element.elements" :key="elem._id"
            :is="elem.settings.type+'-element'" :element="elem" :isEditMode="isEditMode"
            :data-element-id="elem._id" :class="elementInnerClass(elem)" />

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

import SectionElement from '@/components/elements/section/SectionElement.vue';
import TextElement from '@/components/elements/text/TextElement.vue';
import ImageElement from '@/components/elements/image/ImageElement.vue';
import ListElement from '@/components/elements/list/ListElement.vue';
import MapElement from '@/components/elements/map/MapElement.vue';
import ButtonElement from '@/components/elements/button/ButtonElement.vue';
import ProgressBarElement from '@/components/elements/progress-bar/ProgressBarElement.vue';
import AcordionElement from '@/components/elements/acordion/AcordionElement.vue';
import CounterElement from '@/components/elements/counter/CounterElement.vue';

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
        AcordionElement,
        CounterElement
    },
    computed: {
        selectedElement() {
            return this.$store.getters.selectedElement;
        },
        elementClass() {
            let classes = `element section-element`;
            classes += ( this.element && this.selectedElement && this.selectedElement._id === this.element._id ) ? ' selected': '';
            return classes;
        },
        elementStyle() {
            var copy=JSON.parse(JSON.stringify(this.element))
            let dir = copy.data.direction;
            if(!dir) dir = 'column'
            copy.styles.flexDirection = dir
            return copy.styles;
        },
    },
    methods: {
        elementInnerClass(element) {
            let selectedClass = ( element && this.selectedElement && this.selectedElement._id === element._id ) ? true : false;
            return { selected: selectedClass };
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
