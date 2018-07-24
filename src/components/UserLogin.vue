<template>
    <div class="user-login">
<form @submit.prevent="login">
      <input v-model="user.userName"
             type="text" >
             <input v-model="user.password" type="password" >
      <button>login</button>
      <span v-if="isWorng"> worng credinatls</span>
      <span v-if="loginSucsess"> welcome {{user.userName}}</span>

    </form>


    </div>
</template>

<script>
export default {
  name: "user-login",
  data() {
    return {
      user: { userName: "shuvy", password: "pass" },
      isWorng: false,
      loginSucsess: false
    };
  },
  methods: {
    login() {
      console.log("login front comp");

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
            this.isWorng = false;
            this.loginSucsess = true;
            console.log("user connect", user);

            setTimeout(() => {
              this.loginSucsess = false;
            }, 2000);
          }
        });
    }
  }
};
</script>
