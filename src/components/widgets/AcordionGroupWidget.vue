

<template>
    <!-- <div class="widget button-widget" :style="element.styles"> -->
    <div class="widget acordion-group-widget">
        <section class="accordion-group" v-for="item in items" :key="item.id">
            <accordion @clicked="toggleIsShown" :item="item">
            </accordion>
        </section>


    </div>
</template>

<script>
import accordion from '@/components/AcordionWidget.vue'

export default {
  name: "acordion-group-widget",
  props: ["element"],
  methods: {
    toggleIsShown(itemId){
       var child= this.items.find(item =>item.id === itemId)
       if(child)child.isShown= !child.isShown


    }
  },
  data() {
    return {
      items: this.element.element.data||
      [
        { id:'sdsd',name: "Gal", content: 27 ,isShown:false},
        { id:'qdsc',name: "Idan", content: 28 ,isShown:false},
        { id:'sdsw',name: "Ofir", content: 24 ,isShown:false}
      ],
      accordions: []
    };
  },
  components: {
    accordion
  }
};
</script>

<style scoped>
.acordion-group-widget{
    width: 36vw;
    margin: 0 auto;
}
.accordion-group{
    cursor: pointer;
    border: 1px solid black;
}
</style>

