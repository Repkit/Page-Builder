<template>
    <div class="element-editor image-form">

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
    name: 'image-form',
    props: [ 'element' ],
    components: { FormFields },
    data() {
        return {
            content: [
                {
                    cmp: 'input-url',
                    name: 'src',
                    label: 'Link src',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.src
                },
                {
                    cmp: 'input-url',
                    name: 'link',
                    label: 'Link URL',
                    placeholder: 'https://your-link.com',
                    value: this.element.data.link
                }
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
    },
};
</script>
