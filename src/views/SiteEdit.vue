<template>

    <div v-if="loading" class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>

    <split v-else :gutterSize="10" class="site-edit">
        <split-area :size="15" :minSize="100">
            <editor :site="site" />
        </split-area>
        <split-area :size="85">
            <site-preview :site="site" :isEditMode="true" />
            <add-new-section />
        </split-area>
    </split>


</template>

<script>
import VueSplit from 'vue-split-panel';

import Editor from "@/components/editor/Editor.vue";
import SitePreview from '@/components/SitePreview.vue';
import AddNewSection from "@/components/editor/AddNewSection.vue";

export default {
    name: 'site-edit',
    components: { Editor, SitePreview, AddNewSection },
    data() {
        return {
            loading: true,
        }
    },
    created() {
        if ( this.$route.path !== '/add' ) this.loadSite();
        else this.createNewSite();
    },
    computed: {
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
                        setTimeout(() => {this.loading = false}, 1000);
                    }
                    else {
                        this.$router.push(`/${this.$route.params.siteId}`)
                    }
                })
                .catch(err => {
                    this.$router.push('/notfound');
                });
        },
        createNewSite() {
            setTimeout(() => {this.loading = false}, 1000);
            this.$store.commit({ type: 'newSite', userId: this.loggedInUser._id });
            this.$store.commit({ type: 'setEditorScreen', screen: 'editor-site-details' });
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
            outline-offset: -1px;
            z-index: 999;

            > .element-actions {
                display: block;
            }
        }
    }

    .selected {
        outline: 2px solid lightskyblue;
        outline-offset: -1px;
        z-index: 999;
    }
}
</style>
