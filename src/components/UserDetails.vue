<template>
    <div class="user-details" v-if="user">

        <img :src="user.image || '/img/user.png'" />

        <h1>{{user.firstName}} {{user.lastName}}</h1>

        <ul class="social inline-list" aria-label="User social links">
            <li v-if="user.social.site">
                <a :href="user.social.site" target="_blank">
                    <font-awesome-icon size="lg" :icon="['fas', 'link']" />
                </a>
            </li>
            <li>
                <a :href="user.social.facebook" target="_blank">
                    <font-awesome-icon size="lg" :icon="['fab', 'facebook-square']" />
                </a>
            </li>
            <li v-if="user.social.twitter">
                <a :href="user.social.twitter" target="_blank">
                    <font-awesome-icon size="lg" :icon="['fab', 'twitter-square']" />
                </a>
            </li>
            <li v-if="user.social.linkedin">
                <a :href="user.social.linkedin" target="_blank">
                    <font-awesome-icon size="lg" :icon="['fab', 'linkedin']" />
                </a>
            </li>
        </ul>

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
    display: inline-block;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: #000 0 0 10px;
    width: 150px;
    height: auto;
}
a {
    text-decoration: none;
    color: #000;
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
.social li {
    padding: 0 0.5em;
}
</style>
