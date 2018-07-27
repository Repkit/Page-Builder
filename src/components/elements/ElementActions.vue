<template>
    <div class="element-actions">

        <ul class="inline-list" arial-label="Element Actions">
            <li><font-awesome-icon :icon="['fas', 'trash-alt']" /></li>
            <li><font-awesome-icon :icon="['fas', 'clone']" /></li>
            <li><font-awesome-icon :icon="['fas', 'arrows-alt']" /></li>
            <li><font-awesome-icon :icon="['fas', 'edit']" /></li>
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
    font-size: 11px;
    color: #fff;
    display: none;

    ul {
        margin: 0;

        li {
            padding: 5px 7px;
            background-color: lightskyblue;
        }
    }
}
</style>