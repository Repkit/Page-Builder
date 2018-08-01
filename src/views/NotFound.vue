<template>
    <div class="not-found">

        <main-nav></main-nav>

        <section class="error404">
            <div class="container">
                <h1>Page not found</h1>
                <p>The page you where looking for was not found.</p>
            </div>
        </section>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
    name: 'not-found',
    components: { MainNav }
};
</script>

<style scoped lang="scss">
section {
    padding: 50px 0;
    text-align: center;

    &.error404 {
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
