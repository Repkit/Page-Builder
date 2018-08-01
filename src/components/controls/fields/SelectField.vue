<template>
    <div class="select-field flex align-baseline" v-if="newField">

        <label>{{newField.label}}</label>
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
                this.newField.value = this.newField.prefix + newVal + this.newField.suffix;
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