<template>
    <div class="widget section-widget" :style="element.styles">

        <component v-if="element.elements" v-for="element in element.elements"
            :key="element._id" :is="element.settings.type+'-widget'" :element="element">
        </component>

    </div>
</template>

<script>
import SectionWidget from '@/components/widgets/SectionWidget.vue';
import TextWidget from '@/components/widgets/TextWidget.vue';
import ImageWidget from '@/components/widgets/ImageWidget.vue';
import ListWidget from '@/components/widgets/ListWidget.vue';
import MapWidget from '@/components/widgets/MapWidget.vue';
import ButtonWidget from '@/components/widgets/ButtonWidget.vue';
import ProgressBarWidget from '@/components/widgets/ProgressBarWidget.vue';
import AcordionGroupWidget from '@/components/widgets/AcordionGroupWidget.vue';

export default {
    name: 'section-widget',
    props: [ 'element' ],
    components: {
        SectionWidget,
        TextWidget,
        ImageWidget,
        ListWidget,
        MapWidget,
        ButtonWidget,
        ProgressBarWidget,
        AcordionGroupWidget
    }
};
</script>
