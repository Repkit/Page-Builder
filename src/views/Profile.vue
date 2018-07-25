<template>
    <div class="profile">

        <main-nav></main-nav>

        <h1>User Profile</h1>
        <div v-if="user">
            userName: {{user.userName}}<br>
            firstName: {{user.firstName}}<br>
            lastName: {{user.lastName}}<br>
            site:<a :href="user.site">go to site</a> --->>> adress: {{user.site}}<br>
            <site-list :userId="user._id"></site-list> 
        </div>

        <h2>User Sites</h2>
        <site-list :sites="sitesToDisplay"></site-list>

    </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import SiteList from '@/components/SiteList.vue';

export default {
    name: 'profile',
    components: { MainNav, SiteList },
    data() {
        return {
            user: null,
            sites: null
        };
    },
    created() {
        // User data
        this.user = this.loggedInUser;

        // User sites
        const userName = this.$route.params.userName;
        this.$store.dispatch({ type: 'loadSites', userName })
            .then(sites => {
                this.sites = sites;
            });
    },
    methods: {
        userConnect() {
            this.user = this.$store.getters.loggedInUser;
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        sitesToDisplay() {
            return this.$store.getters.sitesToDisplay;
        }
    }
};
</script>
