<template>
    <div class="editor-edit-element" v-if="element">

        <h2>Edit Element</h2>

        <p v-if="element"><strong>ID:</strong> {{element._id}}</p>
        <p v-if="element"><strong>Type:</strong> {{element.settings.type}}</p>

    </div>
</template>

<script>
export default {
    name: 'editor-edit-element',
    props: [ 'element' ],
};
</script>

<style scoped lang="scss">
</style>
