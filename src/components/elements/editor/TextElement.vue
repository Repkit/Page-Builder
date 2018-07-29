<template>
    <div class="element-editor text-element-editor">

        <h3>Content</h3>
        <form-fields :fields="content" />

        <h3>Style</h3>
        <form-fields :fields="styles" />

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
    }
};
</script>
