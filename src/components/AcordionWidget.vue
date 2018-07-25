<template>
    <section class="accordion" @click="onClickHandler">

        <section class="accordion-container">
            <div name="title">{{item.name}}</div>
            <div name="content" v-if="item.isShown">{{item.content}}</div>
        </section>

    </section>        
</template>

<script>
export default {
    props: [ 'item' ],
    methods: {
        onClickHandler() {
            this.$emit('clicked',this.item.id)
        }
    }
}
</script>

<style scoped>
.accordion-container{
    text-align: center;
}
</style>
