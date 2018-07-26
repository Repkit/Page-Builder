<template>
    <div class="user-login">

        <div class="login">
            <span class="close" @click="$emit('toggleLogin')">&times;</span>
            <form @submit.prevent="login">
                <input v-model="user.userName" type="text" placeholder="Enter user name..." />
                <input v-model="user.password" type="password" placeholder="Enter password..." />
                <button>Login</button>
                <span v-if="isWorngCreds">Worng credentials.</span>
            </form>
        </div>

    </div>
</template>

<script>
export default {
  name: "user-login",
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      isWorngCreds: false
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
      let user = { userName: this.user.userName, password: this.user.password };
      this.$store.dispatch({ type: "login", user }).then(user => {
        if (user) {
          this.isWorngCreds = false;
          this.$router.push(`/profile`);
        } else this.isWorngCreds = true;
      });
    }
  }
};
</script>

<style scoped lang="scss">
body {
    overflow: hidden;

    .user-login {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);

        .login {
            position: absolute;
            top: 20%;
            left: 50%;
            width: 400px;
            max-width: 100%;
            transform: translateX(-50%);
            display: inline-block;
            padding: 0.5em 1em 1em;
            background-color: #fff;
            color: #333;
            text-align: left;
            border-radius: 5px;
            box-shadow: #000 0 0 10px;

            .close {
                display: block;
                padding-bottom: 0.5em;
                font-size: 2em;
                font-weight: 900;
                line-height: 1;
                text-align: right;
                cursor: pointer;
            }

            input {
                display: block;
                margin-bottom: 1em;
                padding: 5px 10px;
                width: 100%;
            }

            button {
                float: right;
            }
        }
    }
}
</style>
