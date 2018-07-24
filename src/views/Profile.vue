<template>
    <div class="profile">

        <main-nav></main-nav>
        <!-- // todo user details and user sites -->
        <h1>This is the user profile page</h1>
        <div v-if="user">
            userName: {{user.userName}}<br>
            firstName: {{user.firstName}}<br>
            lastName: {{user.lastName}}<br>
            site:<a :href="user.site">go to site</a>--->>> adress: {{user.site}}<br>  
        </div>
        

    </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "profile",
  components: { MainNav },
  created() {
    this.userConnect();
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    userConnect() {
      this.user = this.$store.getters.loggedInUser;
    }
  }
};
</script>
