<template>
    <section class="editor-footer flex space-around align-center flex-wrap">

        <div class="flex-grow" title="Details" @click="setSiteDetailsScreen">
            <font-awesome-icon :icon="['fas', 'cog']" />
        </div>
        <div class="flex-grow" title="Save" @click="publish">
            <font-awesome-icon :icon="['fas', 'save']" />
        </div>
        <div class="flex-grow" title="Preview" @click="showDisplay" target="_blank">
            <font-awesome-icon :icon="['fas', 'eye']" />
        </div>
        <div class="flex-grow" title="Exit" @click="exit">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </div>

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
            if (!this.site._id) return;
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
                            swal({
                                title: 'Your Site has been sucsecfully Updated!',
                                icon: 'success',
                                buttons: {
                                    ok: true,
                                },
                            });
                        } else {
                            swal({
                                title: 'Had a problem in updating, please try again later',
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
                        html:`
                            <p> 
                                <a href="http://localhost:8080/#/signup" target="_blank">Click Here</a>
                                to sign up and then please click OK
                            </p>`,
                    })
                    .then(() => this.setLogginUser())
                } else {
                    this.$store.dispatch({ type: 'createNewSite' })
                        .then(site => {
                            if (site) {
                                this.$store.commit({ type: 'loadSite', site });
                                this.$store.commit({ type: 'addSite', site });
                                swal({
                                    title: 'Your Site has been sucsecfully Created!',
                                    icon: 'success',
                                    buttons: {
                                        ok: true,
                                    },
                                })
                                .then(() => this.$router.push('/'+site._id+'/edit'))
                            } else {
                                swal({
                                    title: 'Had a problem creating a new site, please try again later',
                                    icon: 'error'
                                });
                            }
                        });
                }
            }
        },
        exit() {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped lang="scss">
.editor-footer {
    background-color: #333;
    color: #fff;
    text-align: center;

    > div {
        padding: 10px 0;
        font-size: 0.85em;
        line-height: 1.5;
        font-size: 15px;
        cursor: pointer;
        transition: .5s;

        &:hover {
            background-color: #666;
            color: #fff;
            transition: .5s;
        }
    }
}
</style>
