<template>
    <div class="input-text-repeater-field" v-if="newField">

        <label>{{newField.label}}</label>
        <div v-for="(val, listIdx) in newField.value" :key="listIdx" class="flex align-baseline">
            <input v-model="newField.value[listIdx]" @input="updateItem(listIdx, newField.value[listIdx])"
                type="text" :placeholder="newField.placeholder" />
            <span @click="removeItem(listIdx)"> &times; </span>
        </div>
        <button @click="addItem"> + Add </button>

    </div>
</template>

<script>
export default {
    name: 'input-text-repeater-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: null
        }
    },
    methods: {
        updateItem(idx, newVal) {
            this.newField.value.splice(idx, 1, newVal);
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        },
        addItem() {
            this.newField.value.push('');
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        },
        removeItem(idx) {
            this.newField.value.splice(idx, 1);
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        }
    },
    watch: {
        field: {
            deep: true,
            immediate: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field));
                this.newField.value = this.newField.value || this.newField.default || [];
            }
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