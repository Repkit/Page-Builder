<template>
    <aside class="editor">

        <h1>Page Builder</h1>

        <div class="new-section">
            <div @click="$emit('add-element', 'section')">Add New Section</div>
        </div>

        <div class="selected-element" v-if="selectedElement">
            Selected Element
            <br><br>
            <p v-if="selectedElement"><strong>ID:</strong> {{selectedElement._id}}</p>
            <p v-if="selectedElement"><strong>Type:</strong> {{selectedElement.settings.type}}</p>
        </div>

    </aside>
</template>

<script>
import EditorService from '@/services/EditorService.js';

export default {
    name: 'editor',
    props: [ 'site', 'selected' ],
    computed: {
        selectedElement() {
            return (this.site && this.site._id) ? EditorService.getSelectedElementById(this.site, this.selected) : null;
        }
    }
};
</script>

<style scoped lang="scss">
.editor {
    background-color: #4a4b4c;
    color: #fff;
    height: 100vh;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.25em;
        line-height: 1.5;
        text-align: center;
        padding-top: 0.25em;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #eee;
    }

    > div {
        padding-top: 1em;
        padding-bottom: 1em;
        border-bottom: 1px solid #eee;
        text-align: center;

        &.new-section {
            cursor: pointer;

            &:hover {
                background-color: #666;
            }
        }

        &.selected-element {
            p {
                text-align: left;
            }
        }
    }
}
</style>
