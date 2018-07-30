<template>
    <div class="element-editor text-element-editor">

        <div class="editor-box">
            <h2>Content</h2>
            <form-fields class="content" :fields="content" />
        </div>

        <div class="editor-box">
            <h2>Style</h2>
            <form-fields class="content" :fields="styles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'text-element-editor',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'textarea',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    rows: 5,
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
                    unit: 'px',
                    default: '30',
                    value: this.element.styles.fontSize
                },
                {
                    cmp: 'input-range',
                    name: 'letterSpacing',
                    label: 'Letter Spacing',
                    unit: 'px',
                    value: this.element.styles.letterSpacing
                },
                {
                    cmp: 'select',
                    name: 'fontWeight',
                    options: [
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
                },
                {
                    cmp: 'select',
                    name: 'textAlign',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                    label: 'Text Align',
                    value: this.element.styles.textAlign
                }
            ]
        }
    }
};
</script>
