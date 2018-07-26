<template>
    <div class="sign-up">

     <main-nav></main-nav>
     <div v-if=" isUserLogin">You are a logged in user</div>
     <form v-else @submit.prevent="signup">
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
            <input v-model="user.site" type="url" placeholder="Site">
        </p>
        <p>
            <input v-model="user.image" type="url" placeholder="URL image">
        </p>
        <p>
         <span v-if="errNameUser">
          The user name you selected is present in the system.
          Please choose a different name 
        </span> 
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
      },
      errNameUser: false
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
