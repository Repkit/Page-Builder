<template>
    <div class="element-editor section-form">

        <div class="editor-box">
            <h2>Section</h2>
            <form-fields class="content" :fields="content" />
        </div>

        <div class="editor-box">
            <h2>Section Style</h2>
            <form-fields class="content" :fields="styles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'section-form',
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
