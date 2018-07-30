<template>
    <div class="site-preview" v-if="site" @dragover="allowDrop" @drop="drop">

        <component v-if="site.elements" v-for="element in site.elements" :key="element._id"
            :is="element.settings.type+'-element'" :element="element" :isEditMode="isEditMode" />

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
        AcordionGroupElement,
        CounterElement,
    },
    methods:{
        allowDrop(ev){
            ev.preventDefault();
        },
        drop(ev) {
            ev.preventDefault();
            var elDrag=this.$store.getters.drag;
            // elDrag.setAttribute("data-element-id", SiteService.makeId());
            // ev.target.appendChild(elDrag);
            console.log('target:',ev.target.getAttribute("data-element-id"))
            this.$store.commit('addToElement', {elementId: ev.target.getAttribute("data-element-id"), elDrag:elDrag})
        }
    }
};
</script>
