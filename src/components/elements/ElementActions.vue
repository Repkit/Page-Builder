<template>
      <div class="element-actions">

        <ul class="inline-list" arial-label="Element Actions">
            <li @click="editElement"><font-awesome-icon :icon="['fas', 'edit']" /></li>
            <li @click="moveElement('up')"><font-awesome-icon :icon="['fas', 'angle-double-up']" /></li>
            <li @click="moveElement('down')"><font-awesome-icon :icon="['fas', 'angle-double-down']" /></li>
            <li @click="cloneElement"><font-awesome-icon :icon="['fas', 'clone']" /></li>
            <li @click="removeElement"><font-awesome-icon :icon="['fas', 'trash-alt']" /></li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'element-actions',
    props: [ 'id' ],
    computed: {
        site() {
            return this.$store.getters.site;
        }
    },
    methods: {
        editElement() {
            this.$store.commit({ type: 'updateSelectedElementById', site: this.site, id: this.id });
            this.$store.commit({ type: 'setEditorScreen', screen: 'editor-edit-element' });
        },
        cloneElement() {
            this.$store.commit({ type: 'cloneElement', id: this.id });
        },
        removeElement() {
            this.$store.commit({ type: 'removeElement', id: this.id });
        },
        moveElement(direction) {
            this.$store.commit({ type: 'moveElement', id: this.id, direction });
        }
    }
};
</script>

<style lang="scss">
.element-actions {
    font-size: 11px;
    line-height: 1;
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
        }
    }
}
</style>
