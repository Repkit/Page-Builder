<template>
    <div class="element-form" v-if="element">

        <p v-if="element"><strong>ID:</strong> {{element._id}}</p>
        <p v-if="element"><strong>Type:</strong> {{element.settings.type}}</p>

    </div>
</template>

<script>
export default {
    name: 'element-form',
    props: [ 'element' ],
};
</script>

<style scoped lang="scss">
</style>
