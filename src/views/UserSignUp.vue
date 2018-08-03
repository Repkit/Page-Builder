<template>
    <div class="user-sign-up">

        <main-nav></main-nav>

        <section class="form">
            <div class="container">
                <h1>Signup</h1>
                <p v-if="isUserLoggedIn">You are a logged in user.</p>
                <form v-else @submit.prevent="signup">
                  <div class="signup-form">
                    <div class="signup-optns-container">
                      <span>User name:</span>
                      <span>Password:</span>
                      <span>Email:</span>
                      <span>First Name:</span>
                      <span>Last Name:</span>
                      <span>Profile Image:</span>
                    </div>

                    <div  class="signup-optns-container">
                      <input v-model="user.userName" type="text" placeholder="UserName" required />
                      <input v-model="user.password" type="password" placeholder="Password" required />
                      <input v-model="user.email" type="email" placeholder="Email" required />
                      <input v-model="user.firstName" type="text" placeholder="FirstName" required />
                      <input v-model="user.lastName" type="text" placeholder="LastName" required />
                      <input v-model="user.image" type="url" placeholder="URL image" />
                    </div>

                    <p v-if="showErrorMessage">
                      The username already exist, please choose a different name.
                    </p>
                  </div>
                  <button>Signup</button>
                </form>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "user-sign-up",
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
    background-color: #eee;
  }
  form {
    height: 70vh;
  }
  .signup-form {
    display: flex;
    justify-content:space-between;
    height: 282px;
    width: 46vw;
    margin: 0 auto;
    margin-bottom: 36px;
  }
  .signup-optns-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    span {
      font-size: 27px;
      font-weight: bold;
      white-space: nowrap;
    }
  }
  button {
    height: 90px;
    width: 120px;
  }
}
@media (max-width: 770px) {
  section {
    .signup-form {
      width:70vw;
    }
  }

}
@media (max-width:490px) {
  section {
    .container {
      padding: 0px
    }
    .signup-form {
      width:90vw;
    }
    .signup-optns-container {
      padding: 0px;
      span {
        font-size: 15px;
      }
    }
  }
}
</style>
