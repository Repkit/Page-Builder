<template>
    <div class="element section-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }">

        <component v-if="element.elements" v-for="element in element.elements"
            :key="element._id" :is="element.settings.type+'-element'" :element="element" :isEditMode="isEditMode">
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
    }
};
</script>