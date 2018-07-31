<template>
    <div class="image-field" v-if="newField">

        <label>{{newField.label}}</label>
        <div class="image-preview">
            <img :src="value" />
            <div class="image-upload" @click="cludinary">
                <span> Upload </span>
            </div>
        </div>
        <input v-model="value" @input="$emit('change', newField, idx)"
            type="url" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
export default {
    name: 'image-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
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
    },
    methods: {
        cludinary() {
            // Do something...
        }
    }
};
</script>

<style lang="scss" scoped>
.image-preview {
    position: relative;
    margin-bottom: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;

    img {
        margin: 0 auto;
    }

    .image-upload {
        position: absolute;
        top: 5px;
        right: 5px;
        left: 5px;
        bottom: 5px;
        background-color: rgba( 0, 0, 0, 0.5 );
        color: #fff;
        display: none;
        cursor: pointer;

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
        }
    }

    &:hover .image-upload {
        display: block;
    }
}
input {
    margin-top: 5px;
}
</style>
