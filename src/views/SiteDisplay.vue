<template>
    <div class="site-details" v-if="site">

        <site-preview :site="site" :isEditMode="false"></site-preview>

    </div>
</template>

<script>
import SiteService from '@/services/SiteService.js';
import SitePreview from '@/components/SitePreview.vue';

export default {
    name: 'site-details',
    components: { SitePreview },
    data() {
        return {
            site: {
                name: '',
                thumb: '',
                date: {},
                elements: null,
            }
        }
    },
    created() {
		this.loadSite();
    },
	methods: {
		loadSite() {
			this.$store.dispatch({ type: 'loadSite', id: this.$route.params.siteId })
				.then(site => {
                    this.site = site;
                })
                .catch(err => {
                    this.$router.push('/notfound');
                });
        }
	}
};
</script>
