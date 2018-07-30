<template>
    <div class="textarea-field" v-if="newField">

        <label>{{newField.label}}</label>
        <textarea v-model="newField.value" @input="$emit('change', newField, idx)"
            :rows="newField.rows" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'textarea-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: Object.assign( this.field )
        }
    }
};
</script>

<style lang="scss" scoped>
textarea {
    width: 100%;
}
</style>
