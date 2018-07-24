<template>
    <div class="main-nav">

        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/profile" v-if="isUserLogin">Profile</router-link>
        <span v-if="isUserLogin"> hey {{loggedInUser}}</span>
        <span v-else >please login</span>
        <user-login></user-login>
        <button v-if="isUserLogin" @click.prevent="logOut">log-out</button>

    </div>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue";
export default {
  name: "main-nav",

  computed: {
    isUserLogin() {
      return this.$store.getters.isUserLoggedIn;
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser.userName;
    }
  },
  methods: {
    logOut() {
      console.log("log out");
      this.$store
        .dispatch({
          type: "logOut"
        })
        .then();
    }
  },
  components: { UserLogin }
};
</script>
