<template>
    <div class="user-sign-up" v-if="!isUserLoggedIn">

        <main-nav></main-nav>

        <section class="form">
            <div class="container">

                <form @submit.prevent="signup">
                    <h3>Signup</h3>
                    <p>
                        <label> User Name: </label>
                        <input v-model="user.userName" type="text" placeholder="Enter user name..." required />
                    </p>
                    <p>
                        <label> Password: </label>
                        <input v-model="user.password" type="password" placeholder="Enter password..." required />
                    </p>
                    <p>
                        <label> Email: </label>
                        <input v-model="user.email" type="email" placeholder="Enter Email..." required />
                    </p>
                    <p>
                        <label> First name: </label>
                        <input v-model="user.firstName" type="text" placeholder="Enter first name..." required />
                    </p>
                    <p>
                        <label> Last name: </label>
                        <input v-model="user.lastName" type="text" placeholder="Enter last name..." required />
                    </p>
                    <p v-if="showErrorMessage">
                        <strong>Warning:</strong> The username already exist, please choose a different name.
                    </p>
                    <button>Signup</button>
                </form>

            </div>
        </section>

        <main-footer></main-footer>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'user-sign-up',
    components: { MainNav, MainFooter },
    data() {
        return {
            user: {
                userName: '',
                password: '',
                email: '',
                firstName: '',
                lastName: '',
                image: '',
                site: '',
                social: {}
            },
            showErrorMessage: false
        };
    },
    created() {
        if (this.isUserLoggedIn) this.$router.push('/profile');
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        }
    },
    methods: {
        signup() {
            var user = this.user;
            this.$store.dispatch({ type: 'signup', user })
                .then(data => {
                    if (data) {
                        let user = {
                            userName: this.user.userName,
                            password: this.user.password
                        };
                        this.$store.dispatch({ type: 'login', user })
                            .then(user => {
                                if (user) this.$router.push('/profile');
                            });
                    } else {
                        this.showErrorMessage = true;
                    }
                });
        }
    }
};
</script>

<style scoped lang="scss">
section {
    padding: 20px 0;

    &.form {
        height: 85vh;

        .container {
            width: 500px;
        }
        h3 {
            margin: 1.5em auto;
            text-align: center;
        }
        label {
            display: inline-block;
            padding-bottom: 10px;
        }
        input {
            width: 100%;
            padding: 5px 10px;
        }
        button {
            display: block;
            margin: 0 auto;
        }
    }
}
</style>
