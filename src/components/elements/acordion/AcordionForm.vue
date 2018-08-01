<template>
    <div class="element-editor acordion-form">

        <div class="editor-box">
            <h2>Acordion</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Acordion Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'acordion-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    name: 'text',
                    cmp: 'input-text',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    value: this.element.data.text
                },
                {
                    name: 'link',
                    cmp: 'input-url',
                    label: 'Link URL',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.link
                }
            ],
            styles: [
                {
                    name: 'fontSize',
                    cmp: 'input-range',
                    label: 'Font Size',
                    default: '18px',
                    unit: 'px',
                    value: this.element.styles.fontSize
                }
            ]
        }
    },
    methods: {
        updateElementData(fieldName, newVal) {
            let newElement = JSON.parse(JSON.stringify(this.element));
            newElement.data[fieldName] = newVal;
            this.$emit('change', newElement);
        },
        updateElementStyles(fieldName, newVal) {
            let newElement = JSON.parse(JSON.stringify(this.element));
            newElement.styles[fieldName] = newVal;
            this.$emit('change', newElement);
        }
    }
};
</script>
