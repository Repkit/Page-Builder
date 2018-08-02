<template>
    <div class="home">

        <main-nav></main-nav>

        <section class="main flex align-center flex-column justify-center">
            <div class="container flex align-center flex-column justify-center">
                <h1>Build beautiful websites in minutes.</h1>
                <p>Our vast library of elements and designs has everything you need to build any type of website.</p>
                <button><router-link to="/add" > Start Now </router-link></button>
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
                    <h3>No Coding</h3>
                    <p>Reach high-end designs, without coding. Design entire sites with your mouse</p>
                </div>
                
                 <div class="item-card">
                    <img src="../assets/img/icon-3.png">
                    <h3>Easy To Use</h3>
                    <p>Design at record speeds with simple user experience </p>
                </div>
              
                <div class="item-card">
                    <img src="../assets/img/icon-4.png">
                    <h3>Faster Than Others</h3>
                    <p>We let you design on the frontend with instant, real time results</p>
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
section {
    padding: 50px 0;
    text-align: center;

    &.main {
        background-color: #4ac2fad2;
        opacity: 0.9;
        background-image: url('../assets/img/cover.jpg');
        width: 100%;
        height: 75vh;
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            background-color: rgba( 0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .container {
            width: 800px;
            max-width: 100%;
            margin: 0 auto;

            h1 {
                margin: 0 0 0.5em;
                font-size: 3em;
                font-weight: bold;
                line-height: 1.5;
                text-align: center;
                color: #fff;
                text-shadow: #000 0 0 5px;
            }

            p {
                margin: 0 0 1.5em;
                font-size: 1.75em;
                line-height: 1.5;
                color: #fff;
            }
            button {
                font-size: 1.5em;
                border-color: #fff;
                color: #fff;

                &:hover {
                    background-color: rgba( 0, 0, 0, 0.5);
                }

                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }

    &.all-in-one {
        background-color: #fff;

        > p {
            max-width: 500px;
        }

        p {
            margin: 0 auto 1em;
            padding-bottom: 15px;
            font-size: 1.15em;
            font-weight: 300;
            line-height: 32px;
            color: #888;
        }

        .container {
            width: 1000px;
            max-width: 100%;
            margin: 0 auto;

            h2 {
                margin-top: 0;
                font-size: 1.75em;
                font-weight: bold;
            }

            p {
                margin-bottom: 0;
                font-size: 1.25em;
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
