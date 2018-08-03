<template>
    <div class="input-url-field" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="newField.value" @input="update"
            type="url" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'input-url-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: null
        }
    },
    methods: {
        update() {
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        }
    },
    watch: {
        field: {
            immediate: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field));
                this.newField.value = this.newField.value || this.newField.default || '';
                this.newField.placeholder = this.newField.placeholder || '';
            }
        }
    },
};
</script>
