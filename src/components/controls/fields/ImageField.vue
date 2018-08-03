<template>
    <div class="image-field" v-if="newField">

        <label >{{newField.label}}</label>
        <label for="upload-image">
            <div class="image-preview">
                <img :src="newField.value" />
                <div class="image-upload">
                    <span> Upload </span>
                </div>
            </div>
        </label>

        <form class="publish-form" method="POST" ref="formUpload">
            <input id="upload-image" type="file" name="img" @change.prevent="uploadImg" hidden />
        </form>

        <input :value="newField.value" readonly
            type="url" :name="newField.name" :placeholder="newField.placeholder" />

    </div>
</template>

<script>
import CloudinaryService from '@/services/CloudinaryService.js';
export default {
    name: 'image-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: null
        }
    },
    methods: {
        update(newVal) {
            let value = newVal ? newVal : this.newField.value;
            let prefix = ( this.newField.prefix ) ? this.newField.prefix : '';
            let suffix = ( this.newField.suffix ) ? this.newField.suffix : '';
            this.newField.value = prefix + value + suffix;
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        },
        uploadImg() {
            CloudinaryService.doUploadImg(this.$refs.formUpload)
                .then(cloudinaryImg => {
                    if  (!cloudinaryImg.error) {
                        this.update( cloudinaryImg.url );
                    }
                });
        },
    },
    watch: {
        field: {
            immediate: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field));
                let value = this.newField.value || this.newField.default || '';
                let prefix = ( this.newField.prefix ) ? this.newField.prefix : '';
                let suffix = ( this.newField.suffix ) ? this.newField.suffix : '';
                value = value.replace( prefix, '' );
                value = value.replace( suffix, '' );
                this.newField.value = value;
                this.newField.placeholder = this.newField.placeholder || '';
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
