<template>
    <div class="main-nav">

        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/profile" v-if="showProfile">Profile</router-link>
        <user-login @is-login="isUser"></user-login>
    </div>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue";
export default {
  name: "main-nav",
  components: { UserLogin },
  data() {
    return {
      showProfile: true
    };
  },
  methods: {
    isUser(val) {
      this.showProfile = val;
    }
  }
};
</script>
