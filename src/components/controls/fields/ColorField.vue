<template>
    <div class="color-field flex align-baseline" v-if="newField">

        <label>{{newField.label}}</label>
        <input v-model="value" @input="$emit('change', newField, idx)"
            type="color" name="newField.name" />

    </div>
</template>

<script>
export default {
    name: 'color-field',
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

<style scoped lang="scss">
label {
    flex-grow: 1;
}
input {
    flex: 0 60px;
}
</style>
