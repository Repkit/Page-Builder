<template>
    <div class="element-editor text-element-editor">

        <h3>Content</h3>

        <label>Text</label>
        <input v-model="element.data.text" type="text" name="text" placeholder="Enter some text..." />

        <label>Link URL</label>
        <input v-model="element.data.link" type="url" name="link" placeholder="https://your-link.com" />

        <h3>Style</h3>

        <label>Font Size</label>
        <input v-model="element.style.fontSize" type="range" name="fontSize" />

    </div>
</template>

<script>
export default {
    name: 'text-element-editor',
    props: [ 'element' ],
};
</script>
