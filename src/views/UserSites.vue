<template>
    <div class="user-sites">

        <main-nav></main-nav>

        <section class="user-data">
            <div class="container">
                <img src="https://randomuser.me/api/portraits/men/9.jpg">
                <h1>{{this.$route.params.userName}}</h1>
                <p>First-Name, Last-Name</p>
            </div>
        </section>

        <section class="user-sites">
            <div class="container">
                <site-list v-if="sites" :sites="sites"></site-list>
                <p v-else>No sites yet, create new site now.</p>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import SiteList from '@/components/SiteList.vue';

export default {
    name: 'user-sites',
    components: { MainNav, SiteList },
    data() {
        return {
            // TODO: add user object from server
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

        img {
            margin: 0 auto;
            display: block;
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: #000 0 0 10px;
            width: 150px;
            height: auto;
        }

        h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: 700;
            line-height: 1.25;
            color: #f52;
        }

        p {
            margin: 0;
            font-size: 1.5em;
            font-weight: 300;
            line-height: 1.5;
            color: #111;
        }
    }
}
</style>
