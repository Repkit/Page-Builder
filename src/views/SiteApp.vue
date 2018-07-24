<template>
    <div class="site-app">
        welcome to site app
        {{sites}}
    </div>
</template>

<script>
export default {
  name: "site-app",
  data() {
    return {
      sites: null
    };
  },
  created() {
    this.$store
      .dispatch({ type: "loadSites" })
      .then(sites =>{this.sites = sites});
  },
  computed: {
    sitesToDisplay() {
      return this.$store.getters.sitesToDisplay;
    }
  }
};
</script>
