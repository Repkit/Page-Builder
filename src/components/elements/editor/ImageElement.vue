<template>
    <div class="element-editor image-element-editor">

        <h3>Content</h3>

        <label>Link Image</label>
        <input v-model="element.data.src" type="url" name="link" placeholder="https://image-link.com" />
        
        <label>Link URL</label>
        <input v-model="element.data.link" type="url" name="link" placeholder="https://your-link.com" />

        <h3>Style</h3>

        <label>align</label>
        <select v-model="element.style.align">
            <option disabled value="center">Please select one</option>
            <option>left</option>
            <option>right</option>
            <option>center</option>
        </select>

        <label>Padding</label>
        <!-- <input v-model="element.style.padding" type="number" name="padding" placeholder="padding" /> -->
        <ul>
            <li>
                <input type="number" v-model="element.style.paddingLeft">
            </li>
            <li>
                <input type="number" v-model="element.style.paddingRight">
            </li>
            <li>
                <input type="number" v-model="element.style.paddingTop">
            </li>
            <li>
                <input type="number" v-model="element.style.paddingBottom">
            </li>
        </ul>

        <label>Margin</label>
        <input v-model="element.style.padding" type="number" name="padding" placeholder="padding" />
    </div>
</template>

<script>
export default {
    name: 'image-element-editor',
    props: [ 'element' ],
};
</script>
