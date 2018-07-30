<template>
    <div class="element-editor map-form">

        <div class="editor-box">
            <h2>Map</h2>
            <form-fields class="content" :fields="content" />
        </div>

        <div class="editor-box">
            <h2>Map Style</h2>
            <form-fields class="content" :fields="styles" />
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
            content: [
                {
                    name: 'text',
                    cmp: 'input-text',
                    label: 'Text',
                    placeholder: 'Enter some location...',
                    value: this.element.data.location
                },
                {
                    name: 'zoom',
                    cmp: 'input-range',
                    label: 'Zoom',
                    min: 1,
                    max: 20,
                    step: 1,
                    value: this.element.styles.zoom
                }
            ],
            styles: [
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
