<template>
    <div class="inner-elements">

        <component v-if="element.elements" v-for="element in element.elements"
            :key="element._id" :is="element.settings.type+'-element'" :element="element">
        </component>

    </div>
</template>

<script>
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
    name: 'recursive-elements-loading',
    props: [ 'element' ],
    components: {
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
