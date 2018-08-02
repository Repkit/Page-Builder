<template>
    <div class="about">

        <main-nav></main-nav>

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

        <section class="more">
            <div class="container">
                <h2>More Features</h2>
                <h3>Section Width & Height</h3>
                <p>Go beyond the oversimplified and generic page designs, by having more control over the various sections. Elementor’s page sections make up the basic architecture of the page, and allow you to reach a level of design reserved until now for high budget custom designed websites.</p>
            </div>
        </section>

        <section class="info">
            <div class="container">
                <h2>About the service</h2>
                <p>
                   1. Customize your Website
                    Creating a website has never been so easy

                    Thanks to our revolutionary drag and drop website builder, you can create a website just how you want it.
                    Just click on the content you wish to change or drag and drop new images.
                    You can easily add maps, blogs, videos, contact forms or even products to sell.
                </p>

                <p>
                    2. Publish your Website
                    Publish your website live to the world

                    Choose your domain name, then click publish. It's that simple! Once live you can still edit your website again and again
                </p>
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
section {
    padding: 50px 0;
    text-align: center;

    &.anything,
    &.more {
        background-color: #eee;
    }

    &.customization,
    &.info {
        background-color: #fff;
    }

    .container {
        width: 800px;
        max-width: 100%;
        margin: 0 auto;

        h2 {
            margin-top: 0;
            font-size: 1.75em;
            font-weight: bold;
        }

        p {
            margin-bottom: 0;
            font-size: 1.5em;
        }
    }
}
</style>
