<template>
    <div class="user-sites">

        <h1>This is the user sites list</h1>
        <site-list v-if="sites" :sites="sites"></site-list>
        <p v-else>No sites yet, create new site now.</p>

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
        this.loadSites();
    },
	methods: {
		loadSites() {
            const userName = this.$route.params.userName;
            this.$store.dispatch({ type: 'loadSitesByUserName', userName:userName })
                .then(sites => {
                    this.sites = sites;
                });
        }
	}
};
</script>
