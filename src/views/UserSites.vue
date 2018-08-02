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
        this.loadUser( this.$route.params.userName )
            .then(user => {
                this.loadUserSites( user );
            })
            .catch(err=> {
                this.$router.push('/notfound');
            });
    },
	methods: {
		loadUser(userName) {
            return UserService.query({name: userName})
                .then( users => {
                    this.user = users[0];
                    return users[0];
                });
        },
		loadUserSites( user ) {
            this.$store.dispatch({ type: 'loadSites', user })
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
        background-color: #eee;
    }

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
</style>
