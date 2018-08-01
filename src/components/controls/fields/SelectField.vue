<template>
    <div class="select-field flex align-baseline" v-if="newField">

        <label>{{newField.label}}</label>
        <select v-model="value" @change="$emit('change', newField.name, newField.value, idx)">
            <option v-for="(option, optIdx) in newField.options" :key="optIdx"
                :value="option.value" :selected="{selected: option.value}">
                {{option.label}}
            </option>
        </select>

    </div>
</template>

<script>
export default {
    name: 'select-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: JSON.parse(JSON.stringify(this.field))
        }
    },
    computed: {
        value: {
            get() {
                let val = this.newField.value || this.newField.default || '';
                val = val.replace( this.newField.prefix, '' ).replace( this.newField.suffix, '' );
                return val;
            },
            set(newVal) {
                let prefix = ( this.newField.prefix ) ? this.newField.prefix : '';
                let suffix = ( this.newField.suffix ) ? this.newField.suffix : '';
                this.newField.value = prefix + newVal + suffix;
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

<style scoped lang="scss">
label,
select {
    // flex-basis: 50%;
    flex: 0 50%;
}
</style>