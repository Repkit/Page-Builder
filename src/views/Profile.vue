<template>
    <div class="profile">

        <main-nav></main-nav>

        <h1>User Profile</h1>

        <div v-if="isUserLogin">

            <user-details :user="loggedInUser"></user-details>

            <h2>User Sites</h2>
            <site-list :sites="sitesToDisplay"></site-list>

        </div>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import UserDetails from '@/components/UserDetails.vue';
import SiteList from '@/components/SiteList.vue';

export default {
    name: 'profile',
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
        isUserLogin() {
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
    }
};
</script>
