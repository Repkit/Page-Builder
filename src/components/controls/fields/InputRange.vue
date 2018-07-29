<template>
    <div class="input-range" v-if="field">

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
    name: 'input-range',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: this.field
        }
    }
};
</script>

<style lang="scss" scoped>
input[type='number'] {
    width: 50px;
}
</style>
