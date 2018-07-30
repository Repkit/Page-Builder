<template>
    <div class="element text-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <template v-if="element.data.link">
            <a :href="element.data.link">
                {{element.data.text}}
            </a>
        </template>
        <template v-else>
            {{element.data.text}}
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
};
</script>
