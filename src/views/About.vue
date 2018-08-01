<template>
    <div class="about">

        <main-nav></main-nav>

        <section class="info">
            <div class="container">
                <h1>About the service</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus quis sed consequatur! Ab accusantium pariatur molestias et possimus aliquid, exercitationem sequi fugiat officiis, praesentium iure architecto impedit, sed iste?</p>
            </div>
        </section>

        <main-footer></main-footer>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'about',
    components: { MainNav, MainFooter }
};
</script>

<style scoped lang="scss">
.about {
    padding-top: 100px;
}

section {
    padding: 50px 0;
    text-align: center;

    &.info {
        background-color: #efefef;

        img {
            margin: 0 auto;
            display: block;
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: #000 0 0 10px;
        }

        h1 {
            margin-top: 0;
            font-size: 2.5em;
            font-weight: 700;
            line-height: 1.25;
        }

        p {
            margin: 0;
            font-size: 1.5em;
            font-weight: 300;
            line-height: 1.5;
        }
    }
}
</style>
