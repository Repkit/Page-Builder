<template>
    <div class="site-list" >

        <div v-if="sites" v-for="site in sites" :key="site._id" class="site-list-item" 
        @mouseover="showEditOptions" @mouseleave="hideEditOptions" >
            <div class="edit-opns" v-show="isShowEditOptions">
                <button @click="editSite(site)">Edit</button>
            </div>
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
        showEditOptions(){
            this.isShowEditOptions=  true
        },
        hideEditOptions(){
            this.isShowEditOptions= false
        }
    }
};
</script>

<style scoped lang="scss">
.site-list {
    display: flex;
    flex-wrap: wrap;

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
