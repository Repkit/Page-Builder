<template>
    <div class="editor-add-section editor-box">

        <h2>Add Section</h2>

        <div class="content flex flex-wrap">
            <div @click="addSection(1)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M100,0V50H0V0Z"></path></svg>
            </div>
            <div @click="addSection(2)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M49,0V50H0V0Z M100,0V50H51V0Z"></path></svg>
            </div>
            <div @click="addSection(3)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M32,0V50H0V0Z M66,0V50H34V0Z M100,0V50H68V0Z"></path></svg>
            </div>
            <div @click="addSection(4)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z"></path></svg>
            </div>
            <div @click="addSection(5)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M18.4,0V50H0V0Z M38.8,0V50H20.4V0Z M59.2,0V50H40.8V0Z M79.6,0V50H61.2V0Z M100,0V50H81.6V0Z"></path></svg>
            </div>
            <div @click="addSection(6)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M15,0V50H0V0Z M32,0V50H17V0Z M49,0V50H34V0Z M66,0V50H51V0Z M83,0V50H68V0Z M100,0V50H85V0Z"></path></svg>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'editor-add-section',
    methods: {
        addSection(columns) {
            this.$store.commit({ type: 'addSection', columns });
        }
    }
};
</script>

<style scoped lang="scss">
.content {

    > div {
        flex: 0 42%;
        margin: 10px 4%;
        opacity: 0.25;
        cursor: pointer;
    }
}
</style>
