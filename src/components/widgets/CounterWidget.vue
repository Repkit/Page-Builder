<template>
    <div class="widget button-widget" :style="element.styles">
        <button @click="inc">+</button>
            {{element.data.text}}
        <button @click="dec">-</button>
    </div>
</template>

<script>
export default {
    name: 'button-widget',
    props: [ 'element' ],
    data(){
        return{
            counter:0
        }
    },
    methods:{
        inc(){
            this.counter++
        },
        dec(){
            if(this.counter === 0)return
            this.counter--
        }
    }
};
</script>
