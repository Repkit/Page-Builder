<template>
    <div class="textarea-field" v-if="newField">

        <label>{{newField.label}}</label>
        <textarea v-model="newField.value" @input="update"
            :rows="newField.rows" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'textarea-field',
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
                this.newField.rows = this.newField.rows || 3;
                this.newField.placeholder = this.newField.placeholder || '';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
textarea {
    width: 100%;
    resize: vertical;
}
</style>
