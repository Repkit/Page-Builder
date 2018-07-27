<template>
    <div class="element-actions">

        <ul class="inline-list" arial-label="Element Actions">
            <li><font-awesome-icon :icon="['fas', 'edit']" /></li>
            <li class="drag"><font-awesome-icon :icon="['fas', 'arrows-alt']" /></li>
            <li><font-awesome-icon :icon="['fas', 'clone']" /></li>
            <li><font-awesome-icon :icon="['fas', 'trash-alt']" /></li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'element-actions',
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
            cursor: pointer;

            &:hover {
                background-color: #6ad;
            }

            &.drag {
                cursor: move;
            }
        }
    }
}
</style>
