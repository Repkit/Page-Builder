<template>
    <div class="input-text-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="value" @input="$emit('change', newField.name, newField.value, idx)"
            type="text" name="newField.name" :placeholder="newField.placeholder" />
    </div>
</template>

<script>
export default {
    name: 'input-text-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: JSON.parse(JSON.stringify(this.field))
        }
    },
    computed: {
        value: {
            get() {
                return this.newField.value || this.newField.default || '';
            },
            set(newVal) {
                this.newField.value = newVal;
            }
        }
    }
};
</script>
