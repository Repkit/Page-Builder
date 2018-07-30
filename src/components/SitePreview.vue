<template>
    <div class="site-preview" v-if="site" @dragover="allowDrop" @dragenter="dragEnter" @drop.prevent="drop">

        <component v-if="site.elements" v-for="element in site.elements" :key="element._id"
            :is="element.settings.type+'-element'" :element="element" :isEditMode="isEditMode" />

    </div>
</template>

<script>
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
    name: 'site-preview',
    props: [ 'site', 'isEditMode' ],
    components: {
        SectionElement,
        TextElement,
        ImageElement,
        ListElement,
        MapElement,
        ButtonElement,
        ProgressBarElement,
        AcordionElement,
        CounterElement,
    },
    computed: {
        drag() {
            return this.$store.getters.drag;
        }
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        dragEnter(ev) {
            var id=ev.target.getAttribute("data-element-id")
            console.log('on dargHover',id)

        },
        drop(ev) {
            console.log('got el id ',ev.target.getAttribute("data-element-id"))
            var type = this.drag;
            this.$store.commit('addToElement', 
            {
                elementId: ev.target.getAttribute("data-element-id"), 
                type:type
            })
        }
    }
};
</script>
