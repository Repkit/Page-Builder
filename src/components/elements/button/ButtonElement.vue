<template>
    <div class="element button-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <template v-if="element.data.link">
            <button>
                <a :href="element.data.link">
                    {{text}}
                </a>
            </button>
        </template>
        <template v-else>
            <button>{{text}}</button>
        </template>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'button-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    computed: {
        text() {
            return this.element.data.text || 'Click here';
        }
    },
};
</script>
