<template>
    <div class="add-new-section">

        <span @click="toggleShow">Add New Section</span>

        <ul class="inline-list" v-if="show">
            <li class="new-section-structure" @click="$emit('add-section', 1)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M100,0V50H0V0Z"></path></svg>
            </li>
            <li class="new-section-structure" @click="$emit('add-section', 2)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M49,0V50H0V0Z M100,0V50H51V0Z"></path></svg>
            </li>
            <li class="new-section-structure" @click="$emit('add-section', 3)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M32,0V50H0V0Z M66,0V50H34V0Z M100,0V50H68V0Z"></path></svg>
            </li>
            <li class="new-section-structure" @click="$emit('add-section', 4)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z"></path></svg>
            </li>
            <li class="new-section-structure" @click="$emit('add-section', 5)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M18.4,0V50H0V0Z M38.8,0V50H20.4V0Z M59.2,0V50H40.8V0Z M79.6,0V50H61.2V0Z M100,0V50H81.6V0Z"></path></svg>
            </li>
            <li class="new-section-structure" @click="$emit('add-section', 6)">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M15,0V50H0V0Z M32,0V50H17V0Z M49,0V50H34V0Z M66,0V50H51V0Z M83,0V50H68V0Z M100,0V50H85V0Z"></path></svg>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'add-new-section',
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        }
    }
};
</script>

<style scoped lang="scss">
.add-new-section {
    width: 800px;
    max-width: 100%;
    margin: 1em auto;
    padding: 2em 0;
    border: 3px dashed #aaa;
    background-color: #fff;
    text-align:center;

    &:hover {
        background-color: #f6f6f6;
    }

    span {
        font-weight: bold;
        color: #666;
        cursor: pointer;

        &:hover {
            color: #000;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
        width: 700px;
        max-width: 100%;
        margin: 0 auto;

        &:first-of-type {
            margin-top: 2em;
        }

        li {
            width: 100%;
            margin: 0 15px 10px;
            opacity: 0.25;
            cursor: pointer;
        }
    }
}
</style>
