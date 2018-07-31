<template>
    <div class="editor-edit-element" v-if="selectedElement">

        <component v-if="selectedElement" :is="selectedElement.settings.type+'-element'"
            :element="selectedElement" @change="updateElement" />

    </div>
</template>

<script>
import SectionElement from '@/components/elements/section/SectionForm.vue';
import TextElement from '@/components/elements/text/TextForm.vue';
import ImageElement from '@/components/elements/image/ImageForm.vue';
import ListElement from '@/components/elements/list/ListForm.vue';
import MapElement from '@/components/elements/map/MapForm.vue';
import ButtonElement from '@/components/elements/button/ButtonForm.vue';
import ProgressBarElement from '@/components/elements/progress-bar/ProgressBarForm.vue';
// import AcordionElement from '@/components/elements/acordion/AcordionForm.vue';
import CounterElement from '@/components/elements/counter/CounterForm.vue';

export default {
    name: 'editor-edit-element',
    computed: {
        selectedElement() {
            return this.$store.getters.selectedElement;
        }
    },
    methods: {
        updateElement( newElement,idx ) {
            console.log(newElement,idx,'edit editor');
            
            //todo store(id)
            // this.$emit('change', newField);
        }
    },
    components: {
        SectionElement,
        TextElement,
        ImageElement,
        ListElement,
        MapElement,
        ButtonElement,
        ProgressBarElement,
        // AcordionElement,
        CounterElement,
    }
};
</script>
