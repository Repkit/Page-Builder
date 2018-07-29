<template>
    <div class="input-url" v-if="field">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="$emit('change', newField, idx)"
            type="url" name="newField.name" placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-url',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: this.field
        }
    }
};
</script>
