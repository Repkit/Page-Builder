import SiteService from '@/services/SiteService';

export default {
    state: {
        sites: []
    },
    getters: {
        sitesToDisplay: state => state.sites
    },
    mutations: {
        setSites(state, { sites }) {
            state.sites = sites
        }
    },
    actions: {
        loadSites(context, payload) {
            return SiteService.query()
                .then(sites => {
                    console.log('sites are loaded',sites)
                    context.commit({ type: 'setSites', sites });
                    return sites
                })
        }
    }
}