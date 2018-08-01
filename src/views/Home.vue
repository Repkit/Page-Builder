<template>
    <div class="home">

        <main-nav></main-nav>

        <section class="main flex align-center flex-column justify-center relative">
            <div class="container flex align-center flex-column justify-center">
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
        
        <section class="all-in-one">
            <h2>All In One</h2>
            <p>The different parts of the platform are deeply integrated to build the most powerful ecosystem for building professional websites.</p>
           
            <div class="flex flex-wrap container space-around align-center">
              
                <div class="item-card">
                    <img src="../assets/img/icon-1.png">
                    <h3>Drag & Drop Page Builder</h3>
                    <p>The builder is the base part that defines the architecture of the website</p>
                </div>
               
                <div class="item-card">
                    <img src="../assets/img/icon-2.png">
                    <h3>Advanced Form Builder</h3>
                    <p>The builder is the base part that defines the architecture of the website</p>
                </div>
                
                 <div class="item-card">
                    <img src="../assets/img/icon-3.png">
                    <h3>Popup Builder</h3>
                    <p>The builder is the base part that defines the architecture of the website</p>
                </div>
              
                <div class="item-card">
                    <img src="../assets/img/icon-4.png">
                    <h3>Menu Builder</h3>
                    <p>The builder is the base part that defines the architecture of the website</p>
                </div>
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
    // padding-top: 100px;
}
.relative {
    position: relative;
    &::before {
        content: "";
        position: absolute;
        background: #29232380;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}

section {
    padding: 50px 0;
    text-align: center;

    &.main {
        background-color: #4ac2fad2;
        opacity: 0.9;
        background-image: url('../assets/img/cover.jpg');
        width: 100%;
        height: calc(90vh - 40px);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 20px;

        .container {
            width: 800px;
            max-width: 100%;
            margin: 0 auto;

            h1 {
                margin: 0;
                padding: 15px;
                color: white;
                font-size: 6em;
                text-align: center;
                margin-bottom: 15px;
                font-size: 3em;
                font-weight: 700;
                line-height: 1.25;
            }

            p {
                color: white;
                margin-top: 0;
                font-size: 1.75em;
                font-weight: 300;
                line-height: 1.5;
            }
            button {
                color: white;
                border-color: white;
            }
        }
    }

    &.anything {
        background-color: #fff;

        .container {
            width: 800px;
            max-width: 100%;
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
            width: 800px;
            max-width: 100%;
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

    &.all-in-one {
        background-color: white;

        > p {
            max-width: 500px;
        }

         p {
            margin: 0 auto;
            margin-bottom: 0;
            font-size: 1.15em;
            font-weight: 300;
            padding-bottom: 15px;

            color: #888;
            font-weight: 300;
            line-height: 32px;
            display: inline-block;
            margin-top: 16px;
        }

        .container {
            width: 800px;
            max-width: 100%;
            margin: 0 auto;

            h2 {
                margin-top: 0;
                font-size: 1.75em;
                font-weight: 700;
            }

            p {
                margin-top: 10px;
                margin-bottom: 0;
                font-size: 1.12em;
                font-weight: 300;
            }

            .item-card {
                max-width: 350px;
                padding-top: 20px;
                padding-bottom: 20px;
            }
        }
    }
}
</style>
