<template>
    <div class="user-edit">

        <main-nav></main-nav>

        <section class="form">
            <div class="container">
              <h1>Edit user details</h1>
              <form @submit.prevent="saveUser" v-if="isUserLoggedIn">
                  <p>
                      <label>First name: </label>
                      <input v-model="user.firstName" type="text" placeholder="FirstName" required>
                  </p>
                  <p>
                    <label>Last name: </label>
                      <input v-model="user.lastName" type="text" placeholder="LastName" required>
                  </p>
                  <p>
                      <label>Password: </label>
                      <input v-model="user.password" type="password" placeholder="Password" required>
                  </p>
                  <p>
                      <label>User image: </label>
                      <input v-model="user.image" type="url" placeholder="URL image">
                  </p>
                  <p> 
                        <label>Website: </label>
                        <input v-model="user.social.site" type="url" placeholder="URL site" />
                  </p>
                  <h3>Social</h3>
                  <div class="social">
                    <p> 
                          <label><font-awesome-icon size="lg" :icon="['fab', 'facebook-square']" />  </label>
                          <input v-model="user.social.facebook" type="url" placeholder="URL facebook" />
                    </p>
                    <p>
                          <label><font-awesome-icon size="lg" :icon="['fab', 'twitter-square']" />  </label>
                          <input v-model="user.social.twiter" type="url" placeholder="twiter" />
                    </p>
                    <p>
                          <label><font-awesome-icon size="lg" :icon="['fab', 'linkedin']" />   </label>
                          <input v-model="user.social.linkedin" type="url" placeholder="linkedin" />
                    </p>
                  </div>
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
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        image: "",
        social: {
          site: "",
          facebook: "",
          twiter: "",
          linkedin: ""
        }
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
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    copyUser() {
      this.user = Object.assign({}, this.loggedInUser);
    },
    saveUser() {
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
            image: this.user.image,
            social: {
              site: this.user.social.site,
              facebook: this.user.social.facebook,
              twiter: this.user.social.twiter,
              linkedin: this.user.social.linkedin
            }
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
  }
}
</style>
