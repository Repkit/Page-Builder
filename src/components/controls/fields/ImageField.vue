<template>
    <div class="image-field" v-if="newField">

        <label>{{newField.label}}</label>
        <img :src="value" />
        <input v-model="value" @input="$emit('change', newField, idx)"
            type="url" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'image-field',
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
img {
    margin-bottom: 5px;
}
input {
    margin-top: 5px;
}
</style>
