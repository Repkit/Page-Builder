<template>
    <div class="input-number" v-if="field">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="$emit('change', newField, idx)"
            type="number" name="newField.name" placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-number',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: this.field
        }
    }
};
</script>
