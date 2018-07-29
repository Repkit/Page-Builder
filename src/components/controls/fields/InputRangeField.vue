<template>
    <div class="input-range-field" v-if="newField">

        <label>{{newField.label}}</label>

        <div class="flex ">
            <input v-model="newField.value" @input="$emit('change', newField, idx)"
                type="range" name="newField.name" />
            <input v-model="newField.value" @input="$emit('change', newField, idx)"
                type="number" name="newField.name" />
        </div>

    </div>
</template>

<script>
export default {
    name: 'input-range-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: Object.assign( this.field )
        }
    }
};
</script>

<style lang="scss" scoped>
input[type='number'] {
    width: 50px;
}
</style>
