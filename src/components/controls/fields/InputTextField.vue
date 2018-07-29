<template>
    <div class="input-text-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="$emit('change', newField, idx)"
            type="text" name="newField.name" placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-text-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: Object.assign( this.field )
        }
    }
};
</script>
