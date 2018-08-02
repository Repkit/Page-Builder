<template>
    <div class="about">

        <main-nav></main-nav>

        <section class="info">
            <div class="container">
                <h1>About the service</h1>
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
