<template>
    <div class="home">

        <main-nav></main-nav>

        <section class="main">
            <div class="container">
                <h1>Build beautiful websites in minutes.</h1>
                <p>Our vast library of components and page designs has everything you need to build any type of website.</p>
                <button>Start Now</button>
            </div>
        </section>

        <section class="anything">
            <div class="container">
                <h2>Any Theme. Any Page.</h2>
                <p>Landing pages, homepages, posts, portfolios, products. Elementor can be used to design any page or custom post type on WordPress.</p>
            </div>
        </section>

        <section class="customization">
            <div class="container">
                <h2>Total Customization Over Layout</h2>
                <h3>Section Width & Height</h3>
                <p>Go beyond the oversimplified and generic page designs, by having more control over the various sections. Elementor’s page sections make up the basic architecture of the page, and allow you to reach a level of design reserved until now for high budget custom designed websites.</p>
            </div>
        </section>
        <main-footer></main-footer>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'home',
	components: { MainNav, MainFooter }
};
</script>

<style scoped lang="scss">
.home {
padding-top: 100px;
    }

section {
    padding: 50px 0;
    text-align: center;

    &.main {
         background-color: #323232;
        background-image: url(../assets/img/cover.jpg);
        width: 100%;
        height: 400px;
        background-position: center;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 20px;
        // background-color: #ffcc46;

        .container {
            max-width: 800px;
            margin: 0 auto;

            h1 {
                margin: 0;
                padding: 15px;
                // font-size: 6em;
                color: #0F243E;
                background-color: rgba(240, 255, 255, 0.377);
                // width: 100%;
                text-align: center;
                margin-bottom: 15px;


                // margin-top: 0;
                font-size: 3em;
                font-weight: 700;
                line-height: 1.25;
                // color: #f52;
            }

            p {
                margin-top: 0;
                font-size: 1.75em;
                font-weight: 300;
                line-height: 1.5;
            }
        }
    }

    &.anything {
        background-color: #fff;

        .container {
            max-width: 800px;
            margin: 0 auto;

            h2 {
                margin-top: 0;
                font-size: 1.75em;
                font-weight: 700;
            }

            p {
                margin-bottom: 0;
                font-size: 1.5em;
                font-weight: 300;
            }
        }
    }

    &.customization {
        background-color: #f7f7f7;

        .container {
            max-width: 800px;
            margin: 0 auto;

            h2 {
                margin-top: 0;
                font-size: 1.75em;
                font-weight: 700;
            }

            p {
                margin-bottom: 0;
                font-size: 1.25em;
                font-weight: 300;
            }
        }
    }
}
</style>
