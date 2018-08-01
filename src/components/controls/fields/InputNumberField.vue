<template>
    <div class="input-number-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="value" @input="$emit('change', newField.name, newField.value, idx)"
            type="number" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-number-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: JSON.parse(JSON.stringify(this.field))
        }
    },
    computed: {
        value: {
            get() {
                return parseInt(this.newField.value) || this.newField.default || '0';
            },
            set(newVal) {
                let unit = ( this.newField.unit ) ? this.newField.unit : '';
                this.newField.value = newVal + unit;
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
    }
};
</script>
