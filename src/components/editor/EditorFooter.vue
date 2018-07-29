<template>
    <section class="editor-footer flex space-around align-center flex-wrap">

        <span @click="setEditorScreen('editor-site-details')">
            <font-awesome-icon :icon="['fas', 'cog']" />
        </span>
        <router-link :to="'/' + site._id" target="_blank">
            <font-awesome-icon :icon="['fas', 'eye']" />
        </router-link>
        <span>
            <font-awesome-icon :icon="['fas', 'save']" />
        </span>

    </section>
</template>

<script>
export default {
    name: 'editor-footer',
    props: [ 'site' ],
    methods: {
        setEditorScreen(screen) {
           this.$store.commit({ type: 'setEditorScreen', screen });
        }
    }
};
</script>

<style scoped lang="scss">
.editor-footer {
    background-color: #333;
    color: #999;

    a {
        padding: 10px 0;
        font-size: 0.85em;
        line-height: 1.5;
        color: #999;
        cursor: pointer;
        transition: .5s;

        &:hover {
            color: #fff;
            transition: .5s;
        }
    }

    > span {
        padding: 10px 0;
        font-size: 15px;
        cursor: pointer;
    }
}
</style>