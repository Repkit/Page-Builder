<template>
    <div class="element-actions">

        <ul class="inline-list" arial-label="Element Actions">
            <li>Delete</li>
            <li>Clone</li>
            <li>Move</li>
            <li>Edit</li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'element-actions',
    methods: {
    }
};
</script>

<style lang="scss">
.element-actions {
    font-size: 12px;
    display: none

    li {
        padding: 3px 10px;
        background-color: lightskyblue;
    }
}
</style>