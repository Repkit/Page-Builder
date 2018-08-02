<template>
    <div class="element video-element" :style="element.styles">

        <div class='embed-container' :style="{ height: element.styles.height, width: '100%' }">
            <iframe  :src='`https://www.youtube.com/embed/${video}`' frameborder='0' allowfullscreen>
            </iframe>
        </div>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'video-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    computed: {
        video() {
            return this.element.data.video || 'QILiHiTD3uc';
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

.embed-container {
     position: relative; 
     padding-bottom: 56.25%; 
     height: 0; 
     overflow: hidden; 
     max-width: 100%; 
     } 
     .embed-container iframe, .embed-container object, .embed-container embed { 
         position: absolute; 
         top: 0; 
         left: 0; 
         width: 100%; 
         height: 100%; }
      
</style>