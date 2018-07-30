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
                    value: this.element.styles.fontSize
                },
                {
                    cmp: 'select',
                    name: 'textAlign',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                    label: 'Align',
                    value: this.element.styles.fontSize
                }
            ]
        }
    }
};
</script>
