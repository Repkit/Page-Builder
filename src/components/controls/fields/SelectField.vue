<template>
    <div class="select-field flex align-baseline" v-if="newField">

        <label>{{newField.label}}</label>
        <select v-model="newField.value" @change="update">
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
            newField: null
        }
    },
    methods: {
        update() {
            let value = this.newField.value;
            let prefix = ( this.newField.prefix ) ? this.newField.prefix : '';
            let suffix = ( this.newField.suffix ) ? this.newField.suffix : '';
            this.newField.value = prefix + value + suffix;
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        }
    },
    watch: {
        field: {
            immediate: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field));
                let value = this.newField.value || this.newField.default || '';
                let prefix = ( this.newField.prefix ) ? this.newField.prefix : '';
                let suffix = ( this.newField.suffix ) ? this.newField.suffix : '';
                value = value.replace( prefix, '' );
                value = value.replace( suffix, '' );
                this.newField.value = value;
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