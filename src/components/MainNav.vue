<template>

    <div class="main-nav">

        <div class="flex space-between align-center">

            <h1>Page Builder</h1>
            <ul class="flex-row align-center flex inline-list" arial-label="Main navigation bar">
                <li><router-link to="/"> Home </router-link></li>
                <li><router-link to="/about"> About </router-link></li>
                <li><router-link to="/profile" v-if="isUserLoggedIn"> My Profile </router-link></li>
                <li><button @click="logout" v-if="isUserLoggedIn"> Logout </button></li>
                <li><router-link to="/signup" v-if="!isUserLoggedIn"> Signup </router-link></li>
                <li>
                    <span @click="toggleLogin" v-if="!isUserLoggedIn"> Login </span>
                    <user-login v-if="!isUserLoggedIn && displayLogin" @toggleLogin="toggleLogin"></user-login>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';

export default {
    name: 'main-nav',
    components: { UserLogin },
    data() {
        return {
            displayLogin: false,
        }
    },
    methods: {
        toggleLogin() {
            this.displayLogin = !this.displayLogin;
        },
        logout() {
            this.$store.dispatch({ type: 'logout' })
                .then( () => {
                    this.$router.push('/');
                });
        }
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser.userName;
        }
    }
};
</script>

<style scoped lang="scss">
.main-nav {
    padding: 20px 0;
    // text-align: center;
    h1 {
        padding-left: 15px;
    }

    li {
        padding: 0.5em 1em;

        a {
            font-weight: bold;
            color: #000;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
</style>