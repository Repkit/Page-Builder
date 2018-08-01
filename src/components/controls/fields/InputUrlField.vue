<template>
    <div class="input-url-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="value" @input="$emit('change', newField.name, newField.value, idx)"
            type="url" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-url-field',
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
    },
    watch: {
        field: {
            deep: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field))
            }
        }
    },
};
</script>
