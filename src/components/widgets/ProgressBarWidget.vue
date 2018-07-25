<template>
    <!-- <div class="widget proggress-bar-widget" :style="element.styles"> -->
    <div class="widget proggress-bar-widget">
        <div class="border">
            
            <div class="fill flex" v-bind:style="{ height:'23px',color:'white','background-color': 'blue',width: status + '%'}">
                <div class="progress-text">
                    <slot name="progress-text"></slot>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
  name: "proggress-bar-widget",
  props: ["element"],
  data() {
    return {
      status: 0
    };
  },
  created() {
    var loadInterval = setInterval(() => {
      if (this.status >= 99) clearInterval(loadInterval);
      this.status++;
    }, 100);
  }
};
</script>

<style scoped>
.border{
    background-color: gray
}
.progress-bar .border {
  background-color: aliceblue;
  border: 1px solid black;
  width: 100%;
  height: 25px;
  border-radius: 6px;
  position: relative;
}

.progress-bar .fill {
  color: black;
  justify-content: center;
  align-items: center;
  background-color: #456caa;
  margin: 0;
  padding: 0;
  width: 50%;
  height: 23px;
  border-radius: 6px;
}

.progress-bar h1 {
  color: black;
  font-size: 1em;
}

.progress-bar {
  width: 100%;
  margin-bottom: 5px;
}

.progress-text h2 {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>

