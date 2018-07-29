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
                    cmp: 'input-text',
                    name: 'text',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    value: this.element.data.direction
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
