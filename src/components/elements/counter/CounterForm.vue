<template>
    <div class="element-editor counter-form">

        <div class="editor-box">
            <h2>Counter</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>
 
        <div class="editor-box">
            <h2>Counter Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'counter-form',
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
                    name: 'counter',
                    cmp: 'input-number',
                    label: 'Counter',
                    default: 10,
                    value: this.element.data.counter
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
