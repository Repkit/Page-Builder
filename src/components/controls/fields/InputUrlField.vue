<template>
    <div class="input-url-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="$emit('change', newField, idx)"
            type="url" name="newField.name" placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-url-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: Object.assign( this.field )
        }
    }
};
</script>
