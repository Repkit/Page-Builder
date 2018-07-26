<template>
    <div class="main-nav">

        <ul class="inline-list" arial-label="Main navigation bar">
            <li><router-link to="/"> Home </router-link></li>
            <li><router-link to="/about"> About </router-link></li>
            <li><router-link to="/profile" v-if="isUserLogin"> My Profile </router-link></li>
            <li><button @click="logout" v-if="isUserLogin"> Logout </button></li>
            <li><router-link to="/signup" v-if="!isUserLogin"> Signup </router-link></li>
            <li>
                <span @click="login" v-if="!isUserLogin"> Login </span>
                <user-login v-if="!isUserLogin"></user-login>
            </li>
        </ul>

    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';

export default {
    name: 'main-nav',
    components: { UserLogin },
    methods: {
        login() {
            // TODO: Open a modal with user-login component
        },
        logout() {
            this.$store.dispatch({ type: 'logOut' })
                .then( () => {
                    this.$router.push('/');
                });
        }
    },
    computed: {
        isUserLogin() {
            return this.$store.getters.isUserLoggedIn;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser.userName;
        }
    }
};
</script>

<style scope lang="scss">
.main-nav {
    padding: 20px 0;
    text-align: center;

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