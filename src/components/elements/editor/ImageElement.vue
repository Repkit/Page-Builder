<template>
    <div class="element-editor image-element-editor">

        <h3>Content</h3>

        <label>Link Image</label>
        <form-fields :fields="content" />

        <h3>Style</h3>
        <form-fields :fields="styles" />
        

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'image-element-editor',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            updatedElement: null,
              content: [
                {
                    cmp: 'input-url',
                    name: 'src',
                    label: 'Link src',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.src
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
    method: {}

};
</script>
