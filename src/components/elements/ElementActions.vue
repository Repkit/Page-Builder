<template>
    <div class="element-actions">

        <ul class="inline-list" arial-label="Element Actions">
            <li @click="editElement" ><font-awesome-icon :icon="['fas', 'edit']" /></li>
            <li class="drag"><font-awesome-icon :icon="['fas', 'arrows-alt']" /></li>
            <li @click="cloneElement"><font-awesome-icon :icon="['fas', 'clone']" /></li>
            <li @click="removeElement"><font-awesome-icon :icon="['fas', 'trash-alt']" /></li>
        </ul>

    </div>
</template>

<script>
export default {
  name: "element-actions",
  props: ["id"],
  methods: {
    removeElement() {
      this.$store.commit({ type: "removeElement", id: this.id});
    },
    editElement() {
      this.$store.commit({ type: "editElement", id: this.id});
    },
    cloneElement() {
      this.$store.commit({ type: "cloneElement", id: this.id});
    }
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
