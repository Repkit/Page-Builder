<template>
    <div class="site-list flex flex-wrap justify-center">

        <div v-if="sites" v-for="site in sites" :key="site._id" class="site-list-item">
            <h3><router-link :to="'/'+site._id">{{site.name}}</router-link></h3>
            <router-link :to="'/'+site._id"><img :src="site.thumb"></router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'site-list',
    props: [ 'sites' ],
    data(){
        return{
            isShowEditOptions:false
        }
    },
    methods:{
        editSite(site){
            this.$router.push(`/${site._id}/edit`);
        },
    }
};
</script>

<style scoped lang="scss">
.site-list-item {
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
    }
}
</style>
