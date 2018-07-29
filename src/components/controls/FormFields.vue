<template>
    <div class="form-fields">

        <component v-if="fields" v-for="(field, idx) in fields" :key="idx"
            :is="field.cmp" :field="field" :idx="idx" @change="updateFields" />

    </div>
</template>

<script>
import InputText from '@/components/controls/fields/InputText.vue';
import InputNumber from '@/components/controls/fields/InputNumber.vue';
import InputUrl from '@/components/controls/fields/InputUrl.vue';
import InputRange from '@/components/controls/fields/InputRange.vue';

export default {
    name: 'form-fields',
    props: [ 'fields' ],
    components: {
        InputText,
        InputNumber,
        InputUrl,
        InputRange,
    },
    data() {
        return {
            newFields: { ...this.fields }
        }
    },
    methods: {
        updateFields( newValue, idx ) {
            this.newFields[idx] = newValue;
            this.$emit('change', newField);
        }
    }
};
</script>

<style lang="scss">
.form-fields {
    text-align: left;

    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
        margin-bottom: 20px;
        width: 100%;
        font-size: 13px;
        padding: 5px;
    }
}
</style>
