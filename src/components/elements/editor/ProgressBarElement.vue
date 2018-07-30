<template>
    <div class="element-editor progress-bar-element-editor">

        <div class="editor-box">
            <h2>Content</h2>
            <form-fields class="content" :fields="content" />
        </div>

        <div class="editor-box">
            <h2>Style</h2>
            <form-fields class="content" :fields="styles" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'progress-bar-element-editor',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'input-text',
                    name: 'text',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    value: this.element.data.text
                },
                {
                    cmp: 'input-range',
                    name: 'min',
                    label: 'min',
                    value: this.element.data.min
                },
                 {
                    cmp: 'input-range',
                    name: 'max',
                    label: 'max',
                    value: this.element.data.max
                },  
                {
                    cmp: 'input-range',
                    name: 'value',
                    label: 'value',
                    value: this.element.data.value
                },
                   {
                    cmp: 'input-range',
                    name: 'step',
                    label: 'step',
                    value: this.element.data.step
                },   
                    {
                    cmp: 'input-range',
                    name: 'interval',
                    label: 'interval',
                    value: this.element.data.interval
                },   
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
    }
};
</script>
