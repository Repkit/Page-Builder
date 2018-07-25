<template>
    <div class="user-sites">

        <h1>This is the user sites list</h1>

        <site-list :sites="sitesToDisplay"></site-list>

    </div>
</template>

<script>
import SiteList from '@/components/SiteList.vue';

export default {
    name: 'user-sites',
    components: { SiteList },
    data() {
        return {
            sites: null
        };
    },
    created() {
        const userName = this.$route.params.userName;
        this.$store.dispatch({ type: 'loadSitesByUserName', userName:userName })
            .then(sites => {
                this.sites = sites;
            });
    },
    computed: {
        sitesToDisplay() {
            return this.$store.getters.sitesToDisplay;
        }
    }
};
</script>
