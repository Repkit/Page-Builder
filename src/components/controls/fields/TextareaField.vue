<template>
    <div class="textarea-field" v-if="newField">

        <label>{{newField.label}}</label>
        <textarea v-model="value" @input="$emit('change', newField.name, newField.value, idx)"
            :rows="newField.rows" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'textarea-field',
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
    }
};
</script>

<style lang="scss" scoped>
textarea {
    width: 100%;
    resize: vertical;
}
</style>
