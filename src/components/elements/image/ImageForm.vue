<template>
    <div class="element-editor image-form">

        <div class="editor-box">
            <h2>Image</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Image Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'image-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: this.getContent(),
            styles: this.getStyles()
        }
    },
    watch: {
        element(element) {
            this.content = this.getContent();     
            this.styles = this.getStyles();
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
        },
        getContent() {
            return [
                {
                    name: 'src',
                    cmp: 'image',
                    label: 'Image',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.src
                },
                {
                    name: 'link',
                    cmp: 'input-url',
                    label: 'Link URL',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.link
                }
            ]
        },
        getStyles() {
            return [
                {
                    name: 'align',
                    cmp: 'select',
                    label: 'Align',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                    default: 'center',
                    value: this.element.styles.textAlign
                },
                {
                    name: 'opacity',
                    cmp: 'input-range',
                    label: 'Opacity',
                    default: 0,
                    min: 0,
                    max: 1,
                    step: 0.1,
                    value: this.element.styles.opacity
                }
            ]
        }
    }
};
</script>
