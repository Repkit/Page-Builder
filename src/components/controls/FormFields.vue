<template>
    <div class="form-fields">

        <component v-if="fields" v-for="(field, idx) in fields" :key="idx"
            :is="field.cmp+'-field'" :field="field" :idx="idx" @change="updateFields" />

    </div>
</template>

<script>
import InputTextField from '@/components/controls/fields/InputTextField.vue';
import InputNumberField from '@/components/controls/fields/InputNumberField.vue';
import InputUrlField from '@/components/controls/fields/InputUrlField.vue';
import InputRangeField from '@/components/controls/fields/InputRangeField.vue';
import SelectField from '@/components/controls/fields/SelectField.vue';
import TextareaField from '@/components/controls/fields/TextareaField.vue';
import InputTextRepeaterField from '@/components/controls/fields/InputTextRepeaterField.vue';


export default {
    name: 'form-fields',
    props: [ 'fields' ],
    components: {
        InputTextField,
        InputNumberField,
        InputUrlField,
        InputRangeField,
        SelectField,
        TextareaField,
        InputTextRepeaterField,
    },
    data() {
        return {
            newFields: Object.assign( this.fields )
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
        line-height: 1.25;
    }

    input,
    select,
    textarea {
        margin-bottom: 20px;
        width: 100%;
        font-size: 13px;
        padding: 5px;
        line-height: 1.25;
        border-radius: 3px;
        border: 1px solid #ddd;
    }
}
</style>
