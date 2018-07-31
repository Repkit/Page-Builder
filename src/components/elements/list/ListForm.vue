<template>
    <div class="element-editor list-form">

        <div class="editor-box">
            <h2>List</h2>
            <form-fields class="content" :fields="content" />
        </div>

        <div class="editor-box">
            <h2>List Style</h2>
            <form-fields class="content" :fields="styles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'list-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'input-text-repeater',
                    name: 'text',
                    label: 'List',
                    placeholder: 'Enter some text...',
                    value: this.element.data.text
                },
            ],
            styles: [
                {
                    name: 'color',
                    cmp: 'color',
                    label: 'Text Color',
                    default: 'transparent',
                    value: this.element.styles.color
                },
                {
                    name: 'fontSize',
                    cmp: 'input-range',
                    label: 'Font Size',
                    default: '18px',
                    unit: 'px',
                    value: this.element.styles.fontSize
                },
                {
                    name: 'lineHeight',
                    cmp: 'input-range',
                    label: 'Line Height',
                    default: '18px',
                    unit: 'px',
                    value: this.element.styles.lineHeight
                },
                {
                    name: 'letterSpacing',
                    cmp: 'input-range',
                    label: 'Letter Spacing',
                    value: this.element.styles.letterSpacing
                },
                {
                    name: 'fontWeight',
                    cmp: 'select',
                    label: 'Font Weight',
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
                    default: '',
                    value: this.element.styles.fontWeight
                },
                {
                    name: 'fontStyle',
                    cmp: 'select',
                    label: 'Font Style',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Normal', value: 'normal' },
                        { label: 'Italic', value: 'italic' },
                        { label: 'Oblique', value: 'oblique' },
                    ],
                    default: '',
                    value: this.element.styles.fontStyle
                },
                {
                    name: 'textDecoration',
                    cmp: 'select',
                    label: 'Font Decoration',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Underline', value: 'underline' },
                        { label: 'Overline', value: 'overline' },
                        { label: 'Line Through', value: 'line-through' },
                        { label: 'None', value: 'none' },
                    ],
                    default: '',
                    value: this.element.styles.textDecoration
                },
                {
                    name: 'textTransform',
                    cmp: 'select',
                    label: 'Font Transform',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Uppercase', value: 'uppercase' },
                        { label: 'Lowercase', value: 'lowercase' },
                        { label: 'Capitalize', value: 'capitalize' },
                        { label: 'None', value: 'none' },
                    ],
                    default: '',
                    value: this.element.styles.textTransform
                }
            ]
        };
    }
};
</script>
