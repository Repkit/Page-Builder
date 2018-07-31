<template>
    <div class="input-text-field" v-if="newField">

        <label>{{newField.label}}</label>
        <div v-for="(val, idx) in newField.value" :key="idx" class="flex align-baseline">
            <input v-model="newField.value[idx]" @input="$emit('change', newField.name, newField.value, idx)"
                type="text" :placeholder="newField.placeholder" />
            <span @click="removeItem(idx)"> &times; </span>
        </div>
        <button @click="addItem"> + Add </button>

    </div>
</template>

<script>
export default {
    name: 'input-text-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: JSON.parse(JSON.stringify(this.field))
        }
    },
    methods: {
        addItem() {
            this.newField.value.push('');
        },
        removeItem(idx) {
            this.newField.value.splice(idx, 1);
        }
    }
};
</script>

<style lang="scss" scoped>
input {
    margin-right: 15px;
}
span {
    width: 20px;
    font-size: 1.25em;
    font-weight: bold;
    cursor: pointer;
}
</style>