<template>
    <div class="element-editor counter-element-editor">

        <h3>Content</h3>
        <form-fields :fields="content" />

        <h3>Style</h3>
        <form-fields :fields="styles" />

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'counter-element-editor',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'input-range',
                    name: 'counter',
                    label: 'counter',
                    value: this.element.data.text
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
