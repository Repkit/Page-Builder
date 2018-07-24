<template>
    <div class="site-app">
        welcome to site app
       <div v-if="sites" v-for="site in sites" :key="site._id" class="site-container">
           <site-preview :site="site"></site-preview>
       </div>
    </div>
</template>

<script>
import SitePreview from "@/components/SitePreview.vue";
export default {
  name: "site-app",
  data() {
    return {
      sites: null
    };
  },
  created() {
    this.$store.dispatch({ type: "loadSites" }).then(sites => {
      this.sites = sites;
    });
  },
  computed: {
    sitesToDisplay() {
      return this.$store.getters.sitesToDisplay;
    }
  },
  components: {
    SitePreview
  }
};
</script>

<style scoped>
.site-container{
margin: 10px;
padding:25px;
}
</style>

