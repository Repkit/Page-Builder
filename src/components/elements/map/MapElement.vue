<template>
    <div class="element map-element" :style="element.styles">

        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :style="{ height: element.styles.height, width: '100%' }"
        :src="`https://maps.google.com/maps?q=${location}&amp;t=m&amp;z=${zoom}&amp;output=embed&amp;iwloc=near`"></iframe>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'map-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    computed: {
        location() {
            return this.element.data.location || 'New York';
        },
        zoom() {
            return this.element.data.zoom || 18;
        }
    }
};
</script>

<style lang="scss" scoped>
.iframe {
    width: 100%;
    max-width: 100%;
}
</style>