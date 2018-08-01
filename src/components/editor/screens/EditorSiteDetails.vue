<template>
    <div class="editor-site-details" v-if="site">

        <div class="editor-box">
            <h2>Site Details</h2>
            <form-fields class="content" :fields="data" @changeElement="updateElementData" />
        </div>

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
    name: 'editor-site-details',
    props: [ 'site' ],
    components: { FormFields },
    data() {
        return {
            data: this.getData(),
        }
    },
    watch: {
        site(element) {
            this.data = this.getData();
        }
    },
    methods: {
        updateElementData(fieldName, fieldValue) {
            let newSite = JSON.parse(JSON.stringify(this.site));
            newSite[fieldName] = fieldValue;
            this.$store.commit({ type: 'updateSiteField', fieldName, fieldValue });
        },
        getData() {
            return [
                {
                    name: 'name',
                    cmp: 'input-text',
                    label: 'Site Name',
                    default: '',
                    value: this.site.name
                },
                {
                    name: 'thumb',
                    cmp: 'image',
                    label: 'Site Thumbnail',
                    default: 'http://via.placeholder.com/500x600?text=Site%20Cover%20Image',
                    value: this.site.thumb
                }
            ]
        }
    }
};
</script>
