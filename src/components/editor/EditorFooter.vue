<template>
    <section class="editor-footer flex space-around align-center flex-wrap">

        <span @click="setSiteDetailsScreen">
            <font-awesome-icon :icon="['fas', 'cog']" />
        </span>
        <span @click="showDisplay" target="_blank">
            <font-awesome-icon :icon="['fas', 'eye']" />
        </span>
        <span @click="publish">
            <font-awesome-icon :icon="['fas', 'save']" />
        </span>

    </section>
</template>

<script>
export default {
    name: 'editor-footer',
    props: [ 'site' ],
    computed:{
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
    },
    methods: {
        setLogginUser() {
            var user = localStorage.getItem('loggedInUser');
            user = JSON.parse(user);
            if (user) {
                this.$store.commit({ type: 'setUser', user })
                this.$store.commit({ type: 'updateUserId', user})
            }
        },
        showDisplay() {
            if(!this.site._id) return;
            let route = this.$router.resolve({path: '/' + this.site._id});
            window.open(route.href, '_blank');
        },
        setSiteDetailsScreen() {
           this.$store.commit({ type: 'setEditorScreen', screen: 'editor-site-details' });
        },
        publish() {
            this.setSiteDetailsScreen();
            if (this.site._id) {
                this.$store.dispatch({ type: 'publishSite' })
                    .then(isUpdated => {
                        if (isUpdated) {
                            swal('Your Site has been sucsecfully Updated!', {
                                icon: 'success',
                                buttons: {
                                    ok: true,
                                },
                            });
                        } else {
                            swal('Had a problem in updating, please try again later', {
                                icon: 'error'
                            });
                        }
                    });
            } else {
                if (!this.loggedInUser._id) {
                    this.$swal({
                        title: 'Please login to create a New site',
                        icon: 'error',
                        buttons: {
                            ok: true,
                        },
                        html:`<p> Click 
                            <a href="http://localhost:8080/#/signup" target="_blank" >Here</a>
                            to sign up </p>`,
                    })
                        .then(() => this.setLogginUser())
                } else {
                    this.$store.dispatch({ type: 'createNewSite' })
                        .then(site => {
                            if (site) {
                                this.$store.commit({ type: 'loadSite', site });
                                this.$store.commit({ type: 'addSite', site });
                                swal('Your Site has been sucsecfully Created!', {
                                    icon: 'success',
                                    buttons: {
                                        ok: true,
                                    },
                                })
                                .then(() => this.$router.push('/'+site._id+'/edit'))
                            } else {
                                swal('Had a problem creating a new site, please try again later', {
                                    icon: 'error'
                                });
                            }
                        });
                }
            }
        }
    }
};
</script>

<style scoped lang="scss">
.editor-footer {
    background-color: #333;
    color: #999;

    a {
        padding: 10px 0;
        font-size: 0.85em;
        line-height: 1.5;
        color: #999;
        cursor: pointer;
        transition: .5s;

        &:hover {
            color: #fff;
            transition: .5s;
        }
    }

    > span {
        padding: 10px 0;
        font-size: 15px;
        cursor: pointer;
        transition: .5s;

        &:hover {
            color: #fff;
            transition: .5s;
        }
    }
}
</style>