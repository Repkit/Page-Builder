<template>
    <div class="main-nav">

        <div ref="toggleScreen" class="toggle-screen" @click="toggleNavMobile"></div>
        <div class="container flex space-between align-center">

            <h1><router-link to="/">Page Builder</router-link></h1>

            <ul ref="navDesktop" class="nav-desktop flex-row align-center flex inline-list" arial-label="Main navigation bar">
                <li><router-link to="/about"> About </router-link></li>
                <li v-if="isUserLoggedIn"><router-link to="/profile" v-if="isUserLoggedIn"> My Profile </router-link></li>
                <li v-if="isUserLoggedIn"><button @click="logout" > Logout </button></li>
                <li v-if="!isUserLoggedIn"><router-link to="/signup" > Signup </router-link></li>
                <li v-if="!isUserLoggedIn">
                    <button @click="toggleLogin" > Login </button>
                </li>
            </ul>

            <div ref="navMobile" class="nav-mobile" @click="toggleNavMobile">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'main-nav',
    data() {
        return {
            navBarMObile: false,
            displayLogin: false,
            user: {
                userName: "",
                password: ""
            },            
        }
    },
    methods: {
        toggleNavMobile() {
            this.$refs.navMobile.classList.toggle("change");
            this.$refs.navDesktop.classList.toggle("open");
            this.$refs.toggleScreen.classList.toggle("show-div");
        },
        toggleLogin() {
            this.displayLogin = !this.displayLogin;
            if (this.displayLogin) this.openLogin();
        },
        openLogin() {
            if (this.isUserLoggedIn && !this.displayLogin) return;
            this.$swal({
                title: 'Login',
                html:`
                    <p>
                        <label>Username:</label>
                        <input class="input1" type="text" required /> 
                    </p>
                    <p>
                        <label>Password:</label>
                        <input class="input2" type="password" required />
                    </p>
                `,
                focusConfirm: false,
                preConfirm: () => {
                    return new Promise(resolve => {
                        resolve([
                            document.querySelector('.input1').value,
                            document.querySelector('.input2').value,
                        ]);
                    })
                }
            })
            .then(result => {
                if(result.value){
                    this.user.userName = result.value[0];
                    this.user.password = result.value[1];
                    this.login();
                }
            })
            .catch(swal.noop)
        },
        logout() {
            this.$store.dispatch({ type: 'logout' })
                .then( () => {
                    this.$router.push('/');
                });
        },
        login() {
            let user = { userName: this.user.userName, password: this.user.password };
            this.$store.dispatch({ type: 'login', user })
            .then(user => {
                if (user) {
                    this.$swal({
                        title: 'Logged In successfully',
                        type: 'success'
                    })
                    .then(() => {
                        this.$router.push(`/profile`);
                    })
                } 
                else this.$swal({
                    title: 'User not found.. Please Sign Up!',
                    type: 'error'
                })
            });
        }
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser.userName;
        }
    }
};
</script>

<style scoped lang="scss">
.main-nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
 
    h1 {
        margin: 0 10px;
        a {
            text-decoration: none;
            font-weight: bold;
            color: #000;
            font-family: 'assistant','Verdana', 'Geneva', 'Tahoma', 'sans-serif';  
        }
    }

    ul {
        li {
            padding: 0.5em 1em;
        a {
            font-weight: bold;
            color: #000;
            text-decoration: none;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }
}
.nav-mobile {
    display: none;
}
.toggle-screen {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: rgba(42, 42, 42, 0.6);
    z-index: 0;
    opacity: 0.9;
    visibility: hidden;
    cursor: pointer;
    transition: opacity .5s; 
}
@media (max-width: 800px) {
    .show-div {
        visibility: visible;
        opacity: 1; 
        display:block;
    }
    .nav-desktop{
        margin: 0;
        z-index: 1;
        padding-top: 20px;
        flex-direction: column;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.808);
        border-left: 1px solid rgba(102, 102, 102, 0.5);
        min-width: 200px;
        transform: translate(100%, 0);
        transition: all .8s;

        &.open{
            transform: translate(0, 0);
        }

        li a {
            border-bottom: 2px solid black;
            text-decoration: dotted;
            display: block;
            // width: 100px;
            // height: 130px;
            line-height: 60px;
            text-align: center;
            font-size: 16px;
        }

        li a:hover {
            color: #42b983;
        }
    }

    /* nav-mobile button */
    
    .nav-mobile {
        z-index: 1;
        cursor: pointer;
        display: block;
        float: right;
        padding: 10px;
    }
    
    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: black;
        margin: 6px 0;
        transition: 0.4s;
    }
    
    /* Rotate first bar */
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
        transform: rotate(-45deg) translate(-9px, 6px) ;
    }
    
    /* Fade out the second bar */
    .change .bar2 {
        opacity: 0;
    }
    
    /* Rotate last bar */
    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
        transform: rotate(45deg) translate(-8px, -8px) ;
    }
    
}
</style>