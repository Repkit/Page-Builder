<template>
    <div v-if="element" :class="elementClass" :style="elementStyle">

        <component v-if="element.elements" v-for="elem in element.elements" :key="elem._id"
            :is="elem.settings.type+'-element'" :element="elem" :isEditMode="isEditMode"
            :data-element-id="elem._id" :class="selectedClass(elem)" />

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
import VideoElement from '@/components/elements/video/VideoElement.vue';

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
        CounterElement,
        VideoElement
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
            if (!dir) dir = 'column'
            copy.styles.flexDirection = dir
            return copy.styles;
        },
    },
    methods: {
        selectedClass(element) {
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
@media (max-width:720px){
    .element.section-element {
        flex-direction: column !important;
    }
}
</style>
