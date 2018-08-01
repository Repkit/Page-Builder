<template>
    <div class="footer-cmp">

        <section class="footer">
            <div class="container">
                <h3>copyright</h3>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'footer-cmp',
    components: { },
    data() {
        return {
        }
    },
  
};
</script>

<style scoped lang="scss">
section {
    padding: 50px 0;
    text-align: center;

    &.footer {
        background-color: #efefef;

        .container {
            max-width: 1000px;
            margin: 0 auto;

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
}

</style>