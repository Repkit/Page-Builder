<template>
    <div class="user-login">

        <form @submit.prevent="login">
            <span>please login </span>
            <input v-model="user.userName" type="text" placeholder="Enter user name...">
            <input v-model="user.password" type="password" placeholder="Enter password...">
            <button>login</button>
            <span v-if="isWorngCreds">Worng credinatls.</span>
        </form>

    </div>
</template>

<script>
export default {
    name: 'user-login',
    data() {
        return {
            user: {
                userName: '',
                password: ''
            },
            isWorngCreds: false
        };
    },
    computed: {
        isUserLogin() {
            return this.$store.getters.isUserLoggedIn;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser.userName;
        }
    },
    methods: {
        login() {
            let user = { userName: this.user.userName, password: this.user.password };
            this.$store.dispatch({ type: 'login', user })
                .then(user => {
                    if (!user) {
                        this.isWorngCreds = true;
                    } else {
                        this.isWorngCreds = false;
                    }
                });
        },
    }
};
</script>
