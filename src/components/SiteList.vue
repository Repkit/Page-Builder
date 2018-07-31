<template>
    <div class="site-list flex flex-wrap justify-center">

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
import swal from 'sweetalert'

export default {
    name: 'site-list',
    props: [ 'sites' ],
    methods:{
        editSite(site) {
            this.$router.push(`/${site._id}/edit`);
        },
        deleteSite(site){
            swal({
                title: "Are you sure you want to delete?",
                text: "Once deleted, you will not be able to recover this Site, Delete anyway?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((isOk) => {
                if(isOk){
                    this.$store.dispatch({ type: "deleteSite", site })
                    .then(isDelete =>  {
                        if (isDelete) {
                            swal("Your Site has been sucsecfully deleted!", {
                                icon: "success",
                                buttons: {
                                    ok: true,
                                },
                            })
                            .then(() => this.$emit('on-delete'))
                        }
                        else{
                                swal("Had a problem in deleting, please try again later", {
                                icon: "error",
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
    margin: 10px 1%;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
    box-shadow: #999 4px 4px 5px;
    transition: .3s;

    h3 {
        margin-top: 0;
    }

    a {
        color: #333;
        text-decoration: none;
    }

    &:hover {
        box-shadow: #999 2px 2px 2px;
        transform: scale(1.03);

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
}
</style>
