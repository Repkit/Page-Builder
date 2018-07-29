<template>
    <div class="element-editor section-element-editor">

        <h3>Setting section</h3>
        <form-fields :fields="content" />

        <h3>Style</h3>
        <form-fields :fields="styles" />

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'section-element-editor',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'select',
                    name: 'direction',
                    options: [
                        { label: 'Horizontal (rows)', value: 'column' },
                        { label: 'Vertical (columns)', value: 'row' },
                    ],
                    label: 'Oriantation',
                    value: this.element.data.direction
                },
            ],
            styles: [
                {
                    cmp: 'input-text',
                    name: 'margin',
                    label: 'Margin',
                    placeholder: '0px 0px 0px 0px',
                    value: this.element.styles.margin
                },
                {
                    cmp: 'input-text',
                    name: 'padding',
                    label: 'Padding',
                    placeholder: '0px 0px 0px 0px',
                    value: this.element.styles.padding
                },
                {
                    cmp: 'input-url',
                    name: 'backgroundImage',
                    label: 'Background Image',
                    placeholder: 'https://your-link.com',
                    value: this.element.styles.backgroundImage
                },
                {
                    cmp: 'select',
                    name: 'backgroundSize',
                    options: [
                        { label: 'Cover', value: 'cover' },
                        { label: 'Contain', value: 'contain' },
                        { label: 'Auto', value: 'auto' },
                    ],
                    label: 'Background Size',
                    value: this.element.data.backgroundSize
                },
                {
                    cmp: 'select',
                    name: 'backgroundRepeat',
                    options: [
                        { label: 'Cover', value: 'cover' },
                        { label: 'Contain', value: 'contain' },
                        { label: 'Auto', value: 'auto' },
                    ],
                    label: 'Background Repeat',
                    value: this.element.data.backgroundRepeat
                }
            ]
        }
    }
};
</script>
