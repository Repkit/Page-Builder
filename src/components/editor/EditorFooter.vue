<template>
    <section class="editor-footer flex space-around align-center flex-wrap">

        <span @click="setSiteDetailsScreen">
            <font-awesome-icon :icon="['fas', 'cog']" />
        </span>
        <router-link :to="'/' + site._id" target="_blank">
            <font-awesome-icon :icon="['fas', 'eye']" />
        </router-link>
        <span @click="publish">
            <font-awesome-icon :icon="['fas', 'save']" />
        </span>

    </section>
</template>

<script>
export default {
    name: 'editor-footer',
    props: [ 'site' ],
    methods: {
        setSiteDetailsScreen() {
           this.$store.commit({ type: 'setEditorScreen', screen: 'editor-site-details' });
        },
        publish() {
            this.setSiteDetailsScreen();
            this.$store.dispatch({ type: 'publishSite' })
                .then(isUpdated => {
                    if (isUpdated) {
                        swal('Your Site has been sucsecfully Updated!', {
                            icon: 'success',
                            buttons: {
                                ok: true,
                            },
                        });
                    }
                    else {
                        swal('Had a problem in updating, please try again later', {
                            icon: 'error'
                        });
                    }
                });
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
    }
}
</style>