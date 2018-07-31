<template>
    <div class="color-field flex align-baseline" v-if="newField">

        <label>{{newField.label}}</label>
        <!-- <input v-model="value" @input="$emit('change', newField, idx)"
            type="color" name="newField.name" /> -->
        <div @click="display=!display" :style="{ color: value, backgroundColor: value }" class="field">
            &nbsp;
            <chrome-picker v-model="value" v-if="display" @input="$emit('change', newField, idx)" />
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
            display: false,
            newField: Object.assign( this.field )
        }
    },
    computed: {
        value: {
            get() {
                return this.newField.value || this.newField.default || '';
            },
            set(newVal) {
                this.newField.value = newVal;
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

    input {
        flex: 0 60px;
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
