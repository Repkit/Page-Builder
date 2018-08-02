<template>
    <div class="color-field flex align-baseline" v-if="newField">

        <label>{{newField.label}}</label>
        <div @click="display=!display" :style="{ backgroundColor: value }" class="field">
            &nbsp;
            <chrome-picker v-model="value" v-if="display" />
        </div>

    </div>
</template>

<script>
import { Chrome } from 'vue-color';

export default {
    name: 'color-field',
    props: [ 'field', 'idx' ],
    components: { 'chrome-picker': Chrome },
    data() {
        return {
            newField: JSON.parse(JSON.stringify(this.field)),
            display: false
        }
    },
    computed: {
        value: {
            get() {
                return this.newField.value || this.newField.default || 'transparent';
            },
            set(newVal) {
                this.newField.value = newVal.hex;
                this.$emit('change', this.newField.name, this.newField.value, this.idx);
            }
        }
    },
    watch: {
        field: {
            deep: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field))
            }
        }
    }
};
</script>

<style scoped lang="scss">
.color-field {
    position: relative;

    label {
        flex-grow: 1;
    }

    div {
        flex: 0 60px;
        // background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFW…G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==);
    }

    .vc-chrome {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
}
</style>
