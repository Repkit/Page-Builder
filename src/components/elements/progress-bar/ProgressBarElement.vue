<template>
    <div class="element progress-bar-element" :style="element.styles">

        <progress-bar type="line" ref="line" :options="options"></progress-bar>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'progress-bar-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    mounted() {
        this.$refs.line.animate( this.element.data.compete || 0.85 );
    },
    computed: {
        options() {
            return Object.assign({
                easing: 'easeInOut',
                duration: this.element.data.duration || 3000,
                strokeWidth: this.element.data.strokeWidth || 2,
                trailWidth: this.element.data.trailWidth || 1,
                color: this.element.data.strokeColor || '#fe8',
                trailColor: this.element.data.trailColor || '#eee',
                svgStyle: {
                    width: '100%',
                    height: '100%'
                },
                // text: {
                //     style: {
                //         color: '#999',
                //         transform: null
                //     },
                //     autoStyleContainer: false
                // },
                from: {
                    color: '#FFEA82'
                },
                to: {
                    color: '#ED6A5A'
                },
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.progress-bar-element {
    width: 100%;
}
</style>
