import SiteService from '@/services/SiteService';

export default {
    state: {
        sites: []
    },
    getters: {
        sitesToDisplay: state => state.sites
    },
    mutations: {
        loadSites(state, { sites }) {
            state.sites = sites;
        },
        addSite(state, { site }) {
            state.sites.push(site);
        },
        updateSite(state, { site }) {
            let siteIdx = state.sites.findIndex(currSite => currSite.id === site.id);
            state.sites.splice(siteIdx, 1, site);
        },
        removeSite(state, { id }) {
            state.sites = state.sites.filter(item => item._id !== id);
        },
        setSites(state, { sites }) {
            state.sites = sites;
        }
    },
    actions: {
        loadSites(context, payload) {
            var filterBy = { user_id: payload.user._id }
            return SiteService.query(filterBy)
                .then(sites => {
                    context.commit({ type: 'loadSites', sites });
                    return sites;
                });
        },
        loadSitesByUserName(context, payload) {
            return SiteService.queryByName(payload.userName)
                .then(sites => {
                    context.commit({ type: 'loadSites', sites });
                    return sites;
                });
        },
        loadSite(context, { id }) {
            return SiteService.getById(id);
        },
        saveSite(context, { newSite }) {
            let isEdit = !!newSite._id;
            if (!isEdit) newSite.createdAt = Date.now();
            return siteService.save(newSite)
                .then(site => {
                    if (isEdit) context.commit({ type: 'updateSite', site })
                    else context.commit({ type: 'addSite', site });
                    return site;
                });
        },
        removeSite(context, { id }) {
            return SiteService.remove(id)
                .then(() => {
                    context.commit({ type: 'removeSite', id });
                });
        },
    }
}