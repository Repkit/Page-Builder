<template>
    <div class="main-nav">

        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/profile" v-if="isUserLogin">Profile</router-link>
        <!-- login/register -->
         {{
      $store.getters.isUserLoggedIn ? 'hey ' + $store.getters.loggedInUser.userName
                                    : 'please login'
    }}
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
  components: { UserLogin, }
};
</script>
