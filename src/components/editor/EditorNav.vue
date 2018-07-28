<template>
    <section class="editor-nav flex align-center text-center">

        <div class="editor-nav-item">
            <font-awesome-icon :icon="['fas', 'th']" />
            <div class="editor-nav-item-label"> Elements </div>
        </div>
        <div class="editor-nav-item">
            <font-awesome-icon :icon="['fas', 'plus']" />
            <div class="editor-nav-item-label"> Add </div>
        </div>
        <div class="editor-nav-item">
            <font-awesome-icon :icon="['fas', 'cog']" />
            <div class="editor-nav-item-label"> Tree </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'editor-nav',
};
</script>

<style scoped lang="scss">
.editor-nav {
    padding: 0;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    cursor: pointer;

    .editor-nav-item {
        width: 33.33%;
        padding: 15px 0 10px;
        font-size: 20px;
        color: #333;
        transition: 1s;

        &:hover {
            background-color: #eee;
            transition: .25s;
        }

        .editor-nav-item-label {
            padding-top: 10px;
            font-size: 15px;
        }
    }
}
</style>
