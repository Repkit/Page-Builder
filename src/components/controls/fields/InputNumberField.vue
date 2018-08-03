<template>
    <div class="input-number-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="update" :min="newField.min" :max="newField.max"
            :step="newField.step" type="number" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-number-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: null
        }
    },
    methods: {
        update() {
            let unit = ( this.newField.unit ) ? this.newField.unit : '';
            this.newField.value += unit;
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        }
    },
    watch: {
        field: {
            immediate: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field));
                this.newField.value = parseInt(this.newField.value) || parseInt(this.newField.default) || 0;
                this.newField.min = ( this.newField.min ) ? this.newField.min : '0';
                this.newField.max = ( this.newField.max ) ? this.newField.max : '100';
                this.newField.step = ( this.newField.step ) ? this.newField.step : '1';
                this.newField.unit = ( this.newField.unit ) ? this.newField.unit : '';
                this.newField.placeholder = this.newField.placeholder || '';
            }
        }
    }
};
</script>
