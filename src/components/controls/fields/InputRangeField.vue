<template>
    <div class="input-range-field" v-if="newField">

        <label>{{newField.label}}</label>
        <div class="flex">
            <input v-model="value" @input="$emit('change', newField, idx)"
                :min="newField.min" :max="newField.max" :step="newField.step"
                type="range" name="newField.name" />
            <input v-model="value" @input="$emit('change', newField, idx)"
                :min="newField.min" :max="newField.max" :step="newField.step"
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
    },
    computed: {
        value: {
            get() {
                return parseInt(this.newField.value) || this.newField.default || '0';
            },
            set(newVal) {
                this.newField.value = newVal + this.newField.unit;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
input[type='range'] {
    margin-right: 15px;
}
input[type='number'] {
    width: 50px;
}
</style>
