<template>
    <div class="element-editor section-form">

        <div class="editor-box">
            <h2>Section</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Section Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
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
                    name: 'direction',
                    cmp: 'select',
                    label: 'Oriantation',
                    options: [
                        { label: 'Horizontal', value: 'column' },
                        { label: 'Vertical', value: 'row' },
                    ],
                    default: 'column',
                    value: this.element.data.direction
                }
            ]
        },
        getStyles() {
            return [
                {
                    name: 'margin',
                    cmp: 'input-text',
                    label: 'Margin',
                    placeholder: '0px 0px 0px 0px',
                    default: '0 auto',
                    value: this.element.styles.margin
                },
                {
                    name: 'padding',
                    cmp: 'input-text',
                    label: 'Padding',
                    placeholder: '0px 0px 0px 0px',
                    default: '30px',
                    value: this.element.styles.padding
                },
                {
                    name: 'maxWidth',
                    cmp: 'input-text',
                    label: 'Max Width',
                    placeholder: '100%, 1200px',
                    default: '',
                    value: this.element.styles.maxWidth
                },
                {
                    name: 'backgroundColor',
                    cmp: 'color',
                    label: 'Background Color',
                    default: 'transparent',
                    value: this.element.styles.backgroundColor
                },
                {
                    name: 'backgroundImage',
                    cmp: 'image',
                    label: 'Background Image',
                    placeholder: 'https://your-link.com',
                    default: '',
                    prefix: 'url(',
                    suffix: ')',
                    value: this.element.styles.backgroundImage
                },
                {
                    name: 'backgroundPosition',
                    cmp: 'select',
                    label: 'BG Position',
                    options: [
                        { label: 'Defult', value: '' },
                        { label: 'Top Left', value: 'top left' },
                        { label: 'Top Center', value: 'top center' },
                        { label: 'Top Right', value: 'top right' },
                        { label: 'Center Left', value: 'center left' },
                        { label: 'Center Center', value: 'center center' },
                        { label: 'Center Right', value: 'center right' },
                        { label: 'Bottom Left', value: 'bottom left' },
                        { label: 'Bottom Center', value: 'bottom center' },
                        { label: 'Bottom Right', value: 'bottom right' },
                    ],
                    default: 'center center',
                    value: this.element.styles.backgroundPosition
                },
                {
                    name: 'backgroundSize',
                    cmp: 'select',
                    label: 'BG Size',
                    options: [
                        { label: 'Defult', value: '' },
                        { label: 'Auto', value: 'auto' },
                        { label: 'Cover', value: 'cover' },
                        { label: 'Contain', value: 'contain' },
                    ],
                    default: '',
                    value: this.element.styles.backgroundSize
                },
                {
                    name: 'backgroundRepeat',
                    cmp: 'select',
                    label: 'BG Repeat',
                    options: [
                        { label: 'Defult', value: '' },
                        { label: 'No Repeat', value: 'no-repeat' },
                        { label: 'Repeat', value: 'repeat' },
                        { label: 'Repeat X', value: 'repeat-x' },
                        { label: 'Repeat Y', value: 'repeat-y' },
                    ],
                    default: '',
                    value: this.element.styles.backgroundRepeat
                }
            ]
        }
    }
};
</script>
