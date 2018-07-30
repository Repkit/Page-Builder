<template>
    <div class="element-editor text-form">

        <div class="editor-box">
            <h2>Text</h2>
            <form-fields class="content" :fields="content" />
        </div>

        <div class="editor-box">
            <h2>Text Style</h2>
            <form-fields class="content" :fields="styles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'text-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    name: 'text',
                    cmp: 'textarea',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    rows: 5,
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
                    name: 'textAlign',
                    cmp: 'select',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                    default: '',
                    label: 'Text Align',
                    value: this.element.styles.textAlign
                },
                {
                    name: 'fontSize',
                    cmp: 'input-range',
                    label: 'Font Size',
                    unit: 'px',
                    default: '30',
                    value: this.element.styles.fontSize
                },
                {
                    name: 'letterSpacing',
                    cmp: 'input-range',
                    label: 'Letter Spacing',
                    unit: 'px',
                    value: this.element.styles.letterSpacing
                },
                {
                    name: 'fontWeight',
                    cmp: 'select',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Normal', value: 'normal' },
                        { label: 'Bold', value: 'bold' },
                        { label: '100', value: '100' },
                        { label: '200', value: '200' },
                        { label: '300', value: '300' },
                        { label: '400', value: '400' },
                        { label: '500', value: '500' },
                        { label: '600', value: '600' },
                        { label: '700', value: '700' },
                        { label: '800', value: '800' },
                        { label: '900', value: '900' },
                    ],
                    label: 'Font Weight',
                    value: this.element.styles.fontWeight
                }
            ]
        }
    }
};
</script>
