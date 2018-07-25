<template>
    <div class="user-details" v-if="user">

        <a v-if="user.site" :href="user.site">
            <img :src="user.image" />
        </a>
        <img v-else :src="user.image">
        <h1>{{user.firstName}} {{user.lastName}}</h1>
        <p>({{user.userName}})</p>

    </div>
</template>

<script>
export default {
    name: 'user-details',
    props: ['user'],
};
</script>

<style scoped lang="scss">
img {
    margin: 0 auto;
    display: block;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: #000 0 0 10px;
    width: 150px;
    height: auto;
}
h1 {
    margin: 0;
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.25;
    color: #f52;
}
p {
    margin: 0;
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.5;
    color: #111;
}
</style>
