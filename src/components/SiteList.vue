<template>
    <div class="site-list flex flex-wrap">

        <div class="site-list-item add-site">
            <div><router-link to="/add">+</router-link></div>
        </div>

        <div v-if="sites" v-for="site in sites" :key="site._id" class="site-list-item">
            <h3><router-link :to="'/'+site._id">{{site.name}}</router-link></h3>
            <router-link :to="'/'+site._id"><img :src="site.thumb"></router-link>

            <ul v-if="loggedInUser._id === site.user_id" class="site-actions inline-list flex space-around">
                <li>
                    <router-link :to="'/'+site._id">
                        <font-awesome-icon :icon="['fas', 'eye']" />
                        <div>Show</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/'+site._id+'/edit'">
                        <font-awesome-icon :icon="['fas', 'edit']" />
                        <div>Edit</div>
                    </router-link>
                </li>
                <li @click="deleteSite(site)">
                    <font-awesome-icon :icon="['fas', 'trash-alt']" />
                    <div>Delete</div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import swal from 'sweetalert';

export default {
    name: 'site-list',
    props: [ 'sites', 'add-site' ],
    methods:{
        editSite(site) {
            this.$router.push(`/${site._id}/edit`);
        },
        deleteSite(site) {
            swal({
                title: 'Delete Site',
                text: 'Are you sure you want to delete? Once deleted, you will not be able to recover this Site, Delete anyway?',
                buttons: true,
                dangerMode: true,
            })
            .then(isOk => {
                if (isOk) {
                    this.$store.dispatch({ type: 'deleteSite', site })
                        .then(isDelete =>  {
                            if (isDelete) {
                                swal({
                                    title: 'Site Deleted',
                                    text: 'The site has been sucsecfully deleted.',
                                    timer: 5000,
                                    button: {
                                        ok: true
                                    }
                                })
                                .then(() => this.$emit('on-delete'))
                            } else {
                                swal({
                                    title: 'Site Not Deleted',
                                    text: 'An error accord. The site was not deleted. Please try again later.',
                                    timer: 5000,
                                    button: {
                                        ok: true
                                    }
                                });
                            }
                        })
                }
            })
        }
    },
    computed:{
        loggedInUser() {
           return this.$store.getters.loggedInUser;
        } 
    }
};
</script>

<style scoped lang="scss">
.site-list-item {
    position: relative;
    width: 31%;
    min-height: 200px;
    margin: 10px 1%;
    padding: 0;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
    transition: .3s;

    h3 {
        margin: 0;
        line-height: 2.5em;
    }

    a {
        color: #333;
        text-decoration: none;
    }

    img {
        display: inline-block;
        width: 100%;
        max-width: 100%;
    }

    &:hover {
        transform: scale(1.025);

        .site-actions {
            opacity: 1;
            transition: 0.5s;
        }
    }

    .site-actions {
        opacity: 0;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0;
        padding: 15px 0;
        font-size: 20px;
        color: #fff;
        background-color: rgba( 0, 0, 0, 0.75);
        border-radius: 0 0 3px 3px;
        transition: 0.5s;

        a {
            color: #fff;
        }

        div {
            padding-top: 10px;
            font-size: 13px;
        }
        li{
            cursor: pointer;
        }
    }

    &.add-site {
        position: relative;
        background-color: #eee;
        border: 2px dashed #999;
        font-size: 100px;
        line-height: 100px;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
            background-color: #ddd;
            transition: 0.5s;

            a {
                color: #333;
                transition: 0.5s;
            }
        }

        div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate( -50%, -50% );
            
            a {
                display: flex;
                justify-content: center;
                width: 110px;
                height: 110px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.41);
                color: #aaa;

            }
        }
    }
}
</style>
