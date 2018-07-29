<template>
    <div class="user-sign-up">

        <main-nav></main-nav>

        <section class="form">
            <div class="container">
                <h1>Signup</h1>
                <p v-if="isUserLoggedIn">You are a logged in user.</p>
                <form v-else @submit.prevent="signup">
                    <p>
                        <input v-model="user.userName" type="text" placeholder="UserName" required />
                    </p>
                    <p>
                        <input v-model="user.email" type="email" placeholder="Email" required />
                    </p>
                    <p>
                        <input v-model="user.password" type="password" placeholder="Password" required />
                    </p>
                    <p>
                        <input v-model="user.firstName" type="text" placeholder="FirstName" required />
                    </p>
                    <p>
                        <input v-model="user.lastName" type="text" placeholder="LastName" required />
                    </p>
                    <p>
                        <input v-model="user.image" type="url" placeholder="URL image" />
                    </p>
                    <p v-if="showErrorMessage">
                        The username already exist, please choose a different name.
                    </p>
                    <button>Signup</button>
                </form>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "sign-up",
  components: { MainNav },
  data() {
    return {
      user: {
        userName: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        image: "",
        social: {}
      },
      showErrorMessage: false
    };
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    signup() {
      var user = this.user;
      this.$store
        .dispatch({
          type: "signup",
          user: {
            userName: this.user.userName,
            email: this.user.email,
            password: this.user.password,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            image: this.user.image,
            social: {}
          }
        })
        .then(data => {
          if (!data) {
            this.showErrorMessage = true;
          } else {
            // Connect user
            let user = {
              userName: this.user.userName,
              password: this.user.password
            };
            this.$store.dispatch({ type: "login", user })
            .then(user => {
              if (user) this.$router.push(`/profile`);
            });
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
section {
  padding: 20px 0;
  text-align: center;

  &.form {
    background-color: #efefef;

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
}
</style>
