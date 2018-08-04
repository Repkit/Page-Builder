<template>
    <div class="user-sites">

        <main-nav></main-nav>

        <section class="user-data" v-if="user">
            <div class="container">
                <user-details v-if="user" :user="user"></user-details>
            </div>
        </section>

        <section class="user-sites" v-if="sites">
            <div class="container">
                <site-list :sites="sites"></site-list>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import UserDetails from '@/components/UserDetails.vue';
import SiteList from '@/components/SiteList.vue';
import UserService from '@/services/UserService.js';

export default {
    name: 'user-sites',
    components: { MainNav, UserDetails, SiteList },
    data() {
        return {
            user: null,
            sites: null
        };
    },
    created() {
        this.loadUser(this.$route.params.userName)
            .then(user => this.loadUserSites( user ))
            .catch(err => this.$router.push('/notfound'));
    },
	methods: {
		loadUser(userName) {
            return UserService.query({ name: userName })
                .then(users => this.user = users[0]);
        },
		loadUserSites(user) {
            this.$store.dispatch({ type: 'loadSites', user })
                .then(sites => this.sites = sites);
        }
	}
};
</script>

<style scoped lang="scss">
section {
    padding: 20px 0;

    &.user-data {
        background-color: #eee;
    }
}
</style>
