<template>
    <div class="user-profile">

        <main-nav></main-nav>

        <section class="user-data" v-if="isUserLoggedIn">
            <div class="container">
                <user-details :user="loggedInUser"></user-details>
            </div>
            <router-link to="/profile/edit" > Edit profile </router-link>
        </section>

        <section class="user-sites" v-if="isUserLoggedIn">
            <div class="container">
                <site-list v-if="sites" :sites="sites" @on-delete="loadUserSites"></site-list>
                <p v-else>No sites yet, create new site now.</p>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import UserDetails from '@/components/UserDetails.vue';
import SiteList from '@/components/SiteList.vue';

export default {
    name: 'user-profile',
    components: { MainNav, SiteList, UserDetails },
    data() {
        return {
            sites: null
        };
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        },
        sitesToDisplay() {
            return this.$store.getters.sitesToDisplay;
        }
    },
    watch: {
        'loggedInUser': {
            handler() {
                if (this.loggedInUser._id) {
                    this.$store.dispatch({ type: 'loadSitesByUserName', userName: this.loggedInUser.userName })
                        .then(sites => {
                            this.sites = sites;
                        });
                }
            }, 
            immediate: true
        }
    },
    methods:{
        loadUserSites(){
            this.$store.dispatch({ type: 'loadSitesByUserName', userName: this.loggedInUser.userName })
                .then(sites => {
                    this.sites = sites;
                });
        }
    }
};
</script>

<style scoped lang="scss">
section {
    padding: 20px 0;
    text-align: center;

    &.user-data {
        background-color: #ffcc46;
    }

    .container {
        max-width: 1000px;
        margin: 0 auto;
    }
}
</style>