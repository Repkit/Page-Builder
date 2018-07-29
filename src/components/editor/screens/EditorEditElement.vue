<template>
    <div class="editor-edit-element" v-if="newElement">

        <h2>Edit Element</h2>

        <div class="content">

            <component v-if="newElement" :is="newElement.settings.type+'-element'"
                :element="newElement" @change="updateElement" />

        </div>

    </div>
</template>

<script>
// import SectionElement from '@/components/elements/editor/SectionElement.vue';
import TextElement from '@/components/elements/editor/TextElement.vue';
import ImageElement from '@/components/elements/editor/ImageElement.vue';
import ListElement from '@/components/elements/editor/ListElement.vue';
// import MapElement from '@/components/elements/editor/MapElement.vue';
import ButtonElement from '@/components/elements/editor/ButtonElement.vue';
// import ProgressBarElement from '@/components/elements/editor/ProgressBarElement.vue';
// import AcordionGroupElement from '@/components/elements/editor/AcordionGroupElement.vue';
// import CounterElement from '@/components/elements/editor/CounterElement.vue';

export default {
    name: 'editor-edit-element',
    props: [ 'element' ],
    data() {
        return {
            newElement: { ...this.element }
        }
    },
    methods: {
        updateElement( newElement ) {
            this.newElement = newElement;
            // this.$emit('change', newField);
        }
    },
    components: {
        // SectionElement,
        TextElement,
        ImageElement,
        ListElement,
        // MapElement,
        ButtonElement,
        // ProgressBarElement,
        // AcordionGroupElement,
        // CounterElement,
    }
};
</script>
