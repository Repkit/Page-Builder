<template>
    <div class="editor-edit-element" v-if="element">

        <h2>Edit Element</h2>

        <p v-if="element"><strong>ID:</strong> {{element._id}}</p>
        <p v-if="element"><strong>Type:</strong> {{element.settings.type}}</p>

        <component v-if="element" :is="element.settings.type+'-element'" :element="element" />

    </div>
</template>

<script>
// import SectionElement from '@/components/elements/editor/SectionElement.vue';
import TextElement from '@/components/elements/editor/TextElement.vue';
// import ImageElement from '@/components/elements/editor/ImageElement.vue';
// import ListElement from '@/components/elements/editor/ListElement.vue';
// import MapElement from '@/components/elements/editor/MapElement.vue';
// import ButtonElement from '@/components/elements/editor/ButtonElement.vue';
// import ProgressBarElement from '@/components/elements/editor/ProgressBarElement.vue';
// import AcordionGroupElement from '@/components/elements/editor/AcordionGroupElement.vue';
// import CounterElement from '@/components/elements/editor/CounterElement.vue';

export default {
    name: 'editor-edit-element',
    props: [ 'element' ],
    components: {
        // SectionElement,
        TextElement,
        // ImageElement,
        // ListElement,
        // MapElement,
        // ButtonElement,
        // ProgressBarElement,
        // AcordionGroupElement,
        // CounterElement,
    }
};
</script>
