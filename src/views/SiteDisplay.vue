<template>
    <div class="site-details" v-if="site">

        <site-preview :site="site" :isEditMode="false"></site-preview>

    </div>
</template>

<script>
import SitePreview from '@/components/SitePreview.vue';

export default {
    name: 'site-details',
    components: { SitePreview },
    computed:{
        site() {
            return this.$store.getters.site;
        }
    },
    created() {
		this.loadSite();
    },
	methods: {
		loadSite() {
			this.$store.dispatch({ type: 'loadSite', id: this.$route.params.siteId })
                .catch(err => {
                    this.$router.push('/notfound');
                });
        }
	}
};
</script>
