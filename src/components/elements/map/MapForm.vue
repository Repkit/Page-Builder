<template>
    <div class="element-editor map-form">

        <div class="editor-box">
            <h2>Map</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Map Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'map-form',
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
                    name: 'location',
                    cmp: 'input-text',
                    label: 'Location',
                    placeholder: 'Enter some location...',
                    value: this.element.data.location
                },
                {
                    name: 'zoom',
                    cmp: 'input-range',
                    label: 'Zoom',
                    default: 18,
                    min: 1,
                    max: 20,
                    step: 1,
                    value: this.element.data.zoom
                }
            ]
        },
        getStyles() {
            return [
                {
                    name: 'height',
                    cmp: 'input-range',
                    label: 'Height',
                    default: '300px',
                    unit: 'px',
                    value: this.element.styles.height
                }
            ]
        }
    }
};
</script>
