

<template>
    <!-- <div class="widget button-widget" :style="element.styles"> -->
    <div class="widget acordion-group-widget">
        <section class="accordion-group" v-for="item in items" :key="item.id"> -->
            <section class="accordion-container" @click="toggleIsShown(item)">
                <div name="title">{{item.name}}</div>
                <div name="content" v-if="item.isShown">{{item.content}}</div>
            </section>
        </section>


    </div>
</template>

<script>

export default {
  name: "acordion-group-widget",
  props: ["element"],
  methods: {
    toggleIsShown(item) {
        item.isShown = !item.isShown;
    }
  },
  data() {
        return {
            items:[
                { id: "sdsd", name: "Gal", content: 27, isShown: false },
                { id: "qdsc", name: "Idan", content: 28, isShown: false },
                { id: "sdsw", name: "Ofir", content: 24, isShown: false }
            ],
        };
    },
    created(){
      if(this.element.element.data.isArray()) this.items=this.element.element.data
    }
};
</script>

<style scoped>
.accordion-container{
    text-align: center;
}

.acordion-group-widget {
  width: 36vw;
  margin: 0 auto;
}
.accordion-group {
  cursor: pointer;
  border: 1px solid black;
}
</style>

