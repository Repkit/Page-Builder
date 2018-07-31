<template>
    <div class="element-editor counter-form">

        <div class="editor-box">
            <h2>Counter</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>
 
        <div class="editor-box">
            <h2>Counter Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'counter-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'input-range',
                    name: 'counter',
                    label: 'counter',
                    value: this.element.data.text
                },
         
            ],
            styles: [
                {
                    cmp: 'input-range',
                    name: 'fontSize',
                    label: 'Font Size',
                    value: this.element.styles.fontSize
                }
            ]
        }
    },
    methods: {
        updateElementData(elementId, fieldName, newVal) {
            let newElement = JSON.parse(JSON.stringify(this.element));
            newElement.data[fieldName] = newVal;
            this.$emit('change', elementId, newElement);
        },
        updateElementStyles(elementId, fieldName, newVal) {
            let newElement = JSON.parse(JSON.stringify(this.element));
            newElement.styles[fieldName] = newVal;
            this.$emit('change', elementId, newElement);
        }
    }
};
</script>
