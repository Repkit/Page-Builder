<template>
    <div class="site-list" >

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
.site-list {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    .site-list-item {
        margin: 10px;
        padding: 25px;
        align-items: center;
        border: 2px solid #00000014;
        width: 300px;

        h3 {
            text-align: center;
            display: block;
            margin-top: 0;
        }
    }
}
</style>
