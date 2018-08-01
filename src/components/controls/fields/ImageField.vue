<template>
    <div class="image-field" v-if="newField">

        <label >{{newField.label}}</label>
        <label for="upload-image">
            <div class="image-preview">
                <img :src="value" />
                <div class="image-upload">
                    <span> Upload </span>
                </div>
            </div>
        </label>

        <form class="publish-form" method="POST" ref="formUpload">
            <input id="upload-image" type="file" name="img" @change.prevent="uploadImg" hidden />
        </form>

        <input v-model="value" @input="$emit('change', newField.name, newField.value, idx)"
            type="url" name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
import CloudinaryService from '@/services/CloudinaryService.js';
export default {
    name: 'image-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: JSON.parse(JSON.stringify(this.field))
        }
    },
    computed: {
        value: {
            get() {
                let val = this.newField.value || this.newField.default || '';
                val = val.replace( this.newField.prefix, '' ).replace( this.newField.suffix, '' );
                return val;
            },
            set(newVal) {
                let prefix = ( this.newField.prefix ) ? this.newField.prefix : '';
                let suffix = ( this.newField.suffix ) ? this.newField.suffix : '';
                this.newField.value = prefix + newVal + suffix;
            }
        }
    },
    methods: {
        uploadImg() {
            CloudinaryService.doUploadImg(this.$refs.formUpload)
                .then(cloudinaryImg => {
                    this.value = cloudinaryImg.url;
                    this.$emit('change', this.newField.name, this.newField.value, this.idx);
                })
        },
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

<style lang="scss" scoped>
.image-preview {
    position: relative;
    margin-bottom: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    min-height: 100px;

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
