<template>
    <div class="user-login">

     <form v-if="!isUserLogin" @submit.prevent="login">
        <span>please login </span>
        <input v-model="user.userName" type="text" >
        <input v-model="user.password" type="password" >
        <button>login</button>
        <span v-if="isWorng"> worng credinatls</span>
      </form>

      <span v-if="showLoginWelcome"> welcome {{user.userName}}</span>
      <span v-if="isUserLogin"> hey {{loggedInUser}}  </span>
      <button v-if="isUserLogin" @click.prevent="logOut">  log-out</button>
    </div>
</template>

<script>
export default {
  name: "user-login",
  data() {
    return {
      user: { userName: "shuvy", password: "pass" },
      isWorng: false,
      showLoginWelcome: false
    };
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isUserLoggedIn;
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser.userName;
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch({
          type: "login",
          user: {
            userName: this.user.userName,
            password: this.user.password
          }
        })
        .then(user => {
          if (!user) {
            this.isWorng = true;
          } else {
            this.userLogin = true;
            this.$emit("is-login", true);
            this.isWorng = false;
            this.showLoginWelcome = true;

            setTimeout(() => {
              this.showLoginWelcome = false;
            }, 2000);
          }
        });
    },
    logOut() {
      this.$emit("is-login", false);
      this.$store
        .dispatch({
          type: "logOut"
        })
        .then();
    }
  }
};
</script>
