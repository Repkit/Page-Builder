<template>
    <div class="textarea-field" v-if="newField">

        <label>{{newField.label}}</label>
        <textarea v-model="value" @input="$emit('change', newField, idx)"
            :rows="newField.rows" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'textarea-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: Object.assign( this.field )
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

<style lang="scss" scoped>
textarea {
    width: 100%;
}
</style>
