<template>
    <div class="element map-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="`https://maps.google.com/maps?q=${location}}&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near`"></iframe>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'map-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    computed:{
        location(){
            return this.element.data.text || 'Tel-Aviv'
        }
    }
};
</script>
