<template>
    <div class="user-edit">

        <main-nav></main-nav>

        <section class="form">
            <div class="container">
              <h1>Edit user details</h1>
              <form @submit.prevent="saveUser" v-if="isUserLogin">
                  <p>
                      <input v-model="user.userName" type="text" placeholder="UserName" required>
                  </p>
                  <p>
                      <input v-model="user.password" type="password" placeholder="Password" required>
                  </p>
                  <p>
                      <input v-model="user.firstName" type="text" placeholder="FirstName" required>
                  </p>
                  <p>
                      <input v-model="user.lastName" type="text" placeholder="LastName" required>
                  </p>
                  <p>
                      <input v-model="user.image" type="url" placeholder="URL image">
                  </p>
                  <p v-if="errNameUser">
                      The username already exist, please choose a different name.
                  </p>
                  <button>Save</button>
              </form>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "user-edit",
  components: { MainNav },
  data() {
    return {
      user: {
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        image: ""
      },
      errNameUser: false
    };
  },
  created() {
    this.copyUser();
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    isUserLogin() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    copyUser() {
      this.user = Object.assign({}, this.loggedInUser);
    },
    saveUser() {
      // var id = this.loggedInUser._id
      // var id = this.loggedInUser._id
      this.user._id = this.loggedInUser._id;

      this.$store
        .dispatch({
          type: "updateUser",
          user: {
            _id: this.user._id,
            userName: this.user.userName,
            password: this.user.password,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            site: this.user.site,
            image: this.user.image
          }
        })
        .then(data => {
          if (!data) {
            this.errNameUser = true;
          } else {
            //connect user
            let user = {
              userName: this.user.userName,
              password: this.user.password
            };
            this.$store.dispatch({ type: "login", user }).then(user => {
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
