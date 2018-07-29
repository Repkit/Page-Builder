<template>
    <split class="site-edit" v-if="site.user_id" :gutterSize="3">

        <split-area :size="15" :minSize="100">

            <editor :site="site" />

        </split-area>

        <split-area :size="85">

            <site-preview :site="site" :isEditMode="true" />

            <add-new-section @add-element="addElement" />

        </split-area>

    </split>
</template>

<script>
import VueSplit from 'vue-split-panel';

import SiteService from '@/services/SiteService.js';
import EditorService from '@/services/EditorService.js';

import Editor from "@/components/editor/Editor.vue";
import SitePreview from '@/components/SitePreview.vue';
import AddNewSection from "@/components/editor/AddNewSection.vue";

export default {
    name: 'site-edit',
    components: {
        Editor,
        SitePreview,
        AddNewSection,
    },
    data() {
        return {
            site: {
                name: '',
                thumb: '',
                date: {},
                elements: null,
            },
        }
    },
    created() {
        this.loadSite();
    },
    computed:{
        getLogginUser() {
            return this.$store.getters.loggedInUser;
        }
    },
	methods: {
		loadSite() {
            debugger;
			this.$store.dispatch({ type: 'loadSite', id: this.$route.params.siteId })
				.then(site => {
                    if(this.getLogginUser._id === site.user_id) {
                        this.$store.commit({type:'setSiteToEdit',site});
                        this.site = site;
                    }
                    else this.$router.push(`/${this.$route.params.siteId}`);
                })
                .catch(err => {
                    this.$router.push('/notfound');
                });
        },
        addElement(elementType) {
            this.site.elements.push(EditorService.emptyElement(elementType));
        }
	}
};
</script>

<style lang="scss">
.site-edit {
    height: 100vh; /* required for split */

    .element {
        position: relative;

        .element-actions {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            display: none;
        }

        &:hover {
            outline: 2px solid lightskyblue;
            z-index: 999;

            > .element-actions {
                display: block;
            }
        }

        // .selected {
        //     outline: 2px solid lightcoral;
            // z-index: 999;
        // }
    }
}
</style>
