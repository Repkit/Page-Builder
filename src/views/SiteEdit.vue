<template>
    <split class="site-edit" v-if="site && site.user_id" :gutterSize="3">

        <split-area :size="15" :minSize="100">
            <editor :site="site" />
        </split-area>

        <split-area :size="85">
            <site-preview :site="site" :isEditMode="true" />
            <add-new-section @add-section="addSection" />
        </split-area>

    </split>
</template>

<script>
import VueSplit from 'vue-split-panel';
import SiteService from '@/services/SiteService.js';

import Editor from "@/components/editor/Editor.vue";
import SitePreview from '@/components/SitePreview.vue';
import AddNewSection from "@/components/editor/AddNewSection.vue";

export default {
    name: 'site-edit',
    components: { Editor, SitePreview, AddNewSection },
    created() {
        this.loadSite();
    },
    computed:{
        site() {
            return this.$store.getters.site;
        },
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        }
    },
	methods: {
		loadSite() {
			this.$store.dispatch({ type: 'loadSite', id: this.$route.params.siteId })
				.then(site => {
                    if (this.loggedInUser._id === site.user_id) {
                        this.$store.commit({ type: 'loadSite', site });
                    }
                    else this.$router.push(`/${this.$route.params.siteId}`);
                })
                .catch(err => {
                    this.$router.push('/notfound');
                });
        },
        addSection(colsCount) {
            this.$store.commit({ type: 'addSection', colsCount });
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
