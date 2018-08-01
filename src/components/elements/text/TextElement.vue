<template>
    <div class="element text-element" :style="element.styles">

        <template v-if="element.data.link">
            <a :href="element.data.link">
                {{text}}
            </a>
        </template>
        <template v-else>
            {{text}}
        </template>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'text-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    computed: {
        text() {
            return this.element.data.text || 'Enter some text...';
        }
    }
};
</script>
