<template>
    <div class="user-edit" v-if="isUserLoggedIn">

        <main-nav></main-nav>

        <section class="user-data">
            <div class="container">
                <user-details :user="loggedInUser"></user-details>
            </div>
            <router-link to="/profile/"> User Profile </router-link>
        </section>

        <section class="form">
            <div class="container">

                <form @submit.prevent="saveUser">
                    <h3>User Details</h3>
                    <p>
                        <label> First name: </label>
                        <input v-model="user.firstName" type="text" placeholder="Enter first name..." required />
                    </p>
                    <p>
                        <label> Last name: </label>
                        <input v-model="user.lastName" type="text" placeholder="Enter last name..." required />
                    </p>
                    <p>
                        <label> Password: </label>
                        <input v-model="user.password" type="password" placeholder="Enter password..." required />
                    </p>
                    <p>
                        <label> User image: </label>
                        <input v-model="user.image" type="url" placeholder="https://..." />
                    </p>
                    <p>
                        <label> Website: </label>
                        <input v-model="user.social.site" type="url" placeholder="https://..." />
                    </p>

                    <h3>Social Links</h3>
                    <p>
                        <label> <font-awesome-icon size="lg" :icon="['fab', 'facebook-square']" /> Facebook </label>
                        <input v-model="user.social.facebook" type="url" placeholder="https://..." />
                    </p>
                    <p>
                        <label> <font-awesome-icon size="lg" :icon="['fab', 'twitter-square']" /> Twitter </label>
                        <input v-model="user.social.twitter" type="url" placeholder="https://..." />
                    </p>
                    <p>
                        <label> <font-awesome-icon size="lg" :icon="['fab', 'linkedin']" /> Linkedin </label>
                        <input v-model="user.social.linkedin" type="url" placeholder="https://..." />
                    </p>

                    <p v-if="errNameUser">
                        The username already exist, please choose a different name.
                    </p>

                    <button>Save</button>
                </form>

            </div>
        </section>

        <main-footer></main-footer>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import UserDetails from '@/components/UserDetails.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'user-edit',
    components: { MainNav, UserDetails, MainFooter },
    data() {
        return {
            user: null,
            errNameUser: false
        };
    },
    created() {
        if (this.isUserLoggedIn) this.user = JSON.parse(JSON.stringify(this.loggedInUser))
        else this.$router.push('/');
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        }
    },
    methods: {
        saveUser() {
            this.$store.dispatch({ type: 'updateUser', user: this.user })
                .then(data => {
                    if (data) {
                        // Connect user
                        let user = {
                            userName: this.user.userName,
                            password: this.user.password
                        };
                        this.$store.dispatch({ type: 'login', user })
                            .then(user => {
                                if (user) this.$router.push('/profile');
                            });
                    } else {
                        // Return an error
                        this.errNameUser = true;
                    }
                });
        }
    }
};
</script>

<style scoped lang="scss">
section {
    padding: 20px 0;

    &.user-data {
        background-color: #eee;
        text-align: center;
    }

    &.form {
        .container {
            width: 500px;
        }
        h3 {
            margin: 1.5em auto;
        }
        label {
            display: inline-block;
            min-width: 150px;
            text-align: left;
        }
        input {
            min-width: 300px;
            padding: 5px 10px;
        }
    }
}
</style>
