<template>
    <div class="element progress-bar-element" :style="element.styles"
        :class="{ ['element-'+element._id]: element._id, selected: isEditMode }"
        :data-element-id="element._id">

        <div class="progress-bar-wrapper" :style="{ backgroundColor: element.data.wrapperBg }">
            <div class="progress-bar-inner"
                :style="{ backgroundColor: element.data.innerBg, width: (status) + '%' }">
                <span class="progress-bar-text">
                    {{element.data.text}}
                </span>
            </div>
        </div>

        <element-actions v-if="isEditMode" :id="element._id"></element-actions>

    </div>
</template>

<script>
import ElementActions from '@/components/elements/ElementActions.vue';

export default {
    name: 'progress-bar-element',
    props: [ 'element', 'isEditMode' ],
    components: { ElementActions },
    data() {
        return {
            status: this.element.data.min
        };
    },
    created() {
        let progressInterval = setInterval(() => {
            if (this.status >= this.element.data.max) clearInterval(progressInterval);
            this.status += this.element.data.step;
        }, this.element.data.interval);
    }
};
</script>

<style scoped lang="scss">
.progress-bar-element {
    width: 100%;
    padding: 5px;

    .progress-bar-wrapper {
        width: 100%;
        position: relative;
        background-color: #eee;

        .progress-bar-inner {
            margin: 0;
            padding: 0;
            background-color: #468;
            border-radius: 3px;

            .progress-bar-text {
                display: inline-block;
                height: 1.5em;
                color: #fff;
            }
        }
    }
}
</style>
