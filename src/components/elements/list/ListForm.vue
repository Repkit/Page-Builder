<template>
    <div class="element-editor list-form">

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
    name: 'list-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'input-text-repeater',
                    name: 'text',
                    label: 'List',
                    placeholder: 'Enter some text...',
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
        };
    }
};
</script>
