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
                    cmp: 'input-text',
                    name: 'text',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    value: this.element.data.text
                },
                {
                    cmp: 'input-url',
                    name: 'link',
                    label: 'Link URL',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.link
                }
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
