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
    methods: {
        showDisplay() {
            if(!this.site._id) return;
            this.$router.push('/' + this.site._id)
        },
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
        transition: .5s;

        &:hover {
            color: #fff;
            transition: .5s;
        }
    }
}
</style>