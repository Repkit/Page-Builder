<template>
    <div class="main-footer">

        <div class="container">
            <p>All rights reserved &copy; 2018</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'main-footer'
};
</script>

<style scoped lang="scss">
.main-footer {
    padding: 50px 0;
    text-align: center;
    background-color: #efefef;

    .container {
        max-width: 1000px;
        margin: 0 auto;

        p {
            margin: 0;
        }
    }
}
</style>