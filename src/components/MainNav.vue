<template>
    <div class="main-nav">

        <ul class="inline-list" arial-label="Main navigation bar">
            <li><router-link to="/"> Home </router-link></li>
            <li><router-link to="/about"> About </router-link></li>
            <li><router-link to="/profile" v-if="isUserLogin"> My Profile </router-link></li>
            <li><span @click="logout" v-if="isUserLogin"> Logout </span></li>
            <li><router-link to="/signup" v-if="!isUserLogin"> Signup </router-link></li>
            <li><user-login v-if="!isUserLogin"></user-login></li>
        </ul>

    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';

export default {
    name: 'main-nav',
    components: { UserLogin },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logOut' })
                .then();
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
li {
    padding: 0.5em 1em;
}
</style>