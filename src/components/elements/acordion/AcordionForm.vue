<template>
    <div class="element-editor acordion-form">

        <div class="editor-box">
            <h2>Acordion</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Acordion Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'acordion-form',
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
                    name: 'acordion',
                    cmp: 'input-text',
                    label: 'Acordion Data',
                    placeholder: 'Enter some text...',
                    default: [
                        { id: 'sdsd', name: 'Gali', content: 27, isShown: false },
                        { id: 'qdsc', name: 'Idan', content: 28, isShown: false },
                        { id: 'sdsw', name: 'Ofir', content: 24, isShown: false },
                    ],
                    value: this.element.data.acordion
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
                    name: 'fontSize',
                    cmp: 'input-range',
                    label: 'Font Size',
                    default: '18px',
                    unit: 'px',
                    value: this.element.styles.fontSize
                }
            ]
        }
    }
};
</script>
