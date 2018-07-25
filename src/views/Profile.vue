<template>
    <div class="profile">

        <main-nav></main-nav>
        <button v-if="user">edit my profile</button>

        <h1>User Profile</h1>
        <div v-if="isUserLogin">
          <user-details :user="user"></user-details>
              
          <site-list :userId="user._id"></site-list> 

          <h2>User Sites</h2>
          <site-list :sites="sitesToDisplay"></site-list>
        </div>
    </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import SiteList from "@/components/SiteList.vue";
import UserDetails from "@/components/UserDetails.vue";

export default {
  name: "profile",
  components: { MainNav, SiteList, UserDetails },
  data() {
    return {
      user: null,
      sites: null
    };
  },
  created() {
    // User data
    this.user = this.loggedInUser;

    // User sites
    if (this.user._id) {
      this.$store
        .dispatch({ type: "loadSitesByUserName", userName: this.user.userName })
        .then(sites => {
          this.sites = sites;
        });
    }
  },
  methods: {},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    isUserLogin() {
      return this.$store.getters.isUserLoggedIn;
    },
    sitesToDisplay() {
      return this.$store.getters.sitesToDisplay;
    }
  }
};
</script>
