<template>
    <div class="input-text" v-if="field">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="$emit('change', newField, idx)"
            type="text" name="newField.name" placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-text',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: this.field
        }
    }
};
</script>
