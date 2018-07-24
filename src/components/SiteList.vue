<template>
    <div class="site-list">
        Welcome to site app
      <div class="sites-container">
        <div v-if="sites" v-for="site in sites" :key="site._id" class="site-container">
          <site-preview :site="site"></site-preview>
        </div>
      </div>
    </div>
</template>

<script>
import SitePreview from "@/components/SitePreview.vue";
export default {
  name: "site-list",
  props: ["userId"],
  data() {
    return {
      sites: null
    };
  },
  created() {
    this.$store
      .dispatch({ type: "loadSites", userId: this.userId })
      .then(sites => {
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
.site-container {
  margin: 10px;
  padding: 25px;
  display: flex;
  align-items: center;
  border: 2px solid #00000014;
}
.sites-container {
  display: flex;
  flex-wrap: wrap;
}
.site-container {
  width: 300px;
}
</style>

