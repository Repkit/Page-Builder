<template>
    <div class="element-editor video-form">

        <div class="editor-box">
            <h2>Video</h2>
            <form-fields class="content" :fields="content" @changeElement="updateElementData" />
        </div>

        <div class="editor-box">
            <h2>Video Style</h2>
            <form-fields class="content" :fields="styles" @changeElement="updateElementStyles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'video-form',
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
                    name: 'video',
                    cmp: 'input-text',
                    label: 'video',
                    placeholder: 'Enter video id...',
                    default: 'xwtdhWltSIg',
                    value: this.element.data.video
                },
                {
                    name: 'height',
                    cmp: 'input-range',
                    label: 'Height',
                    default: '300px',
                    unit: 'px',
                    min: '50',
                    max: '2000',
                    step: '1',
                    value: this.element.data.height
                }
            ]
        },
        getStyles() {
            return []
        }
    }
};
</script>
