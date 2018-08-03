<template>
    <div class="element-editor progress-bar-form">

        <div class="editor-box">
            <h2>Progress Bar</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Progress Bar Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'progress-bar-form',
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
                    name: 'compete',
                    cmp: 'input-range',
                    label: 'Compete',
                    default: 1,
                    min: 0,
                    max: 1,
                    step: '0.1',
                    value: this.element.data.compete
                },
                {
                    name: 'strokeWidth',
                    cmp: 'input-range',
                    label: 'Stroke Width',
                    default: 1,
                    max: 10,
                    value: this.element.data.strokeWidth
                },
                {
                    name: 'trailWidth',
                    cmp: 'input-range',
                    label: 'trail Width',
                    default: 2,
                    max: 10,
                    value: this.element.data.trailWidth
                },
                {
                    name: 'duration',
                    cmp: 'input-range',
                    label: 'Duration',
                    default: 2500,
                    max: 10000,
                    value: this.element.data.duration
                },
                {
                    name: 'strokeColor',
                    cmp: 'color',
                    label: 'Stroke',
                    default: '#fe8',
                    value: this.element.data.strokeColor
                },
                {
                    name: 'trailColor',
                    cmp: 'color',
                    label: 'Trail',
                    default: '#eee',
                    value: this.element.data.trailColor
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
                    default: '0',
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
                    name: 'textAlign',
                    cmp: 'select',
                    label: 'Text Align',
                    options: [
                        { label: 'Default', value: '' },
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                    default: '',
                    value: this.element.styles.textAlign
                }
            ]
        }
    }
};
</script>
