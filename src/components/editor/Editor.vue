<template>
    <aside class="editor">

        <h1>Page Builder</h1>

        <div class="elements-navigation flex">
            <p class="text-center flex-grow"> <i>&oplus;</i> <br> Add </p>
            <p class="text-center flex-grow"> <i>&#9776;</i> <br> Elements </p>
            <p class="text-center flex-grow"> <i>&#10515;</i> <br> Tree </p>
        </div>

        <div class="new-section">
            <h2 @click="$emit('add-element', 'section')">Add New Section</h2>
        </div>

        <div class="selected-element" v-if="selectedElement">
            <h2>Selected Element</h2>

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
    background-color: #e6e9ec;
    color: #6d7882;
    height: 100vh;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.25em;
        line-height: 1.5;
        text-align: center;
        padding-top: 0.25em;
        padding-bottom: 0.5em;
        background-color: #4e4c4d;
        color: #fff;
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 0.85em;
        line-height: 1.1;
        text-align: center;
    }

    > div {
        padding-top: 1em;
        padding-bottom: 1em;
        text-align: center;
        background-color: #fff;
        margin-bottom: 10px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

        &.elements-navigation {
            padding: 0;
            cursor: pointer;

            p {
                margin: 0;
                padding-top: 1em;
                padding-bottom: 1em;
                font-size: 0.75em;

                i {
                    display: inline-block;
                    font-size: 2em;
                    padding-bottom: 0.25em;
                    font-style: normal;
                }

                &:hover {
                    background-color: #eee;
                }
            }
        }

        &.new-section {
            cursor: pointer;

            &:hover {
                background-color: #eee;
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
