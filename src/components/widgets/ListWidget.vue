<template>
    <div class="widget list-widget" :style="element.styles">
        <div v-for="item in items" :key="item.id">
            {{item}}
        </div>

    </div>
</template>

<script>
export default {
    name: 'list-widget',
    props: [ 'element' ],
    data(){
        return{
            items:null
        }
    },
    created(){
        this.items=this.element.data.text
    }
};
</script>
