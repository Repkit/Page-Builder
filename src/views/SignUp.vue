<template>
    <div class="sign-up">

     <main-nav></main-nav>
     <div v-if=" isUserLogin">You are a logged in user</div>
     <form v-else @submit.prevent="signup">
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
        <button>signup</button>
    </form>


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
        password: "",
        firstName: "",
        lastName: "",
        site: "",
        image: ""
      }
    };
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    signup() {
      var user = this.user;
      console.log("signup", this.user);
      this.$store
        .dispatch({
          type: "signup",
          user: {
            userName: this.user.userName,
            password: this.user.password,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            site: this.user.site,
            image: this.user.image
          }
        })
        .then(() => {
          this.user = {
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            site: "",
            image: ""
          };
        });
    }
  }
};
</script>
