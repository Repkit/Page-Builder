<template>
    <div class="user-edit">
        <main-nav></main-nav>
        <section  v-if="isUserLogin">
            <form @submit.prevent="saveUser">
                <p>
                    <input v-model="user.userName" type="text" placeholder="UserName" required>
                </p>
                    <input v-model="user.password" type="password" placeholder="Password" required>
                <p>
                </p>
            
                <p>
                    <input v-model="user.firstName" type="text" placeholder="FirstName" required>
                </p>
                <p>
                    <input v-model="user.lastName" type="text" placeholder="LastName" required>
                </p>
                <p>
                    <input v-model="user.site" type="url" placeholder="Site">
                </p>
                <p>
                    <input v-model="user.image" type="url" placeholder="URL image">
                </p>
                <button>save</button>
            </form>

            <!-- test -->
                    <!-- user new: {{user.userName}}
                     user:{{loggedInUser.userName}}
                    <!{{loggedInUser.lastName}} -->

                    {{loggedInUser._id}} 
       

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
        site: "",
        image: ""
      }
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
        .then(() => {
          let user = {
            userName: this.user.userName,
            password: this.user.password
          };
          this.$store.dispatch({ type: "login", user }).then(user => {
            if (user) this.$router.push(`/profile`);
          });
        });
    }
  }
};
</script>
