import SiteService from '@/services/SiteService';

export default {
    state: {
        // Sites List
        sites: [],

        // Current site
        site: {
            name: '',
            thumb: '',
            date: {},
            elements: null,
        },
        dropType: null,
    },
    getters: {
        // Sites List
        sitesToDisplay: state => state.sites,

        // Current site
        site: state => state.site,
        dropType: state => state.dropType, 
    },
    mutations: {
        // Sites List
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
        deleteSite(state, { site }) {
            state.sites = state.sites.filter(currSite => currSite._id !== site._id)
        },

        // Current site
        loadSite(state, { site }) {
            state.site = site;
        },
        newSite(state, { userId }) {
            state.site = SiteService.emptySite(userId);
        },
        updateSiteField(state, { fieldName, fieldValue }) {
            state.site[fieldName] = fieldValue;
        },
        removeElement(state, { id }) {
            state.site.elements = SiteService.removeSelectedElementById(state.site.elements, id);
        },
        cloneElement(state, { id }) {
            state.site.elements = SiteService.cloneElementById(state.site.elements, id);
        },
        addToElement(state, { elementId, type }) {
            state.site.elements = SiteService.addElementById(state.site.elements, elementId, type)
        },
        addSection(state, { columns }) {
            state.site.elements.push(SiteService.emptySectionElement(columns))
        },
        updateElement(state, { newElement }) {
            state.site.elements = SiteService.updateElement(state.site.elements, newElement)
        },
        updatedropType(state, { elementId }){
            state.dropType = SiteService.getTypeById(state.site.elements, elementId)
        },
        moveElement(state, { id, direction}){
            state.site.elements = SiteService.moveElementById(state.site.elements, id, direction)
        },
        updateUserId(state, { user }) {
            state.site.user_id = user._id
        },
    },
    actions: {
        publishSite(context) {
            return SiteService.publishSite(context.state.site);
        },
        createNewSite(context) {
            return SiteService.createNewSite(context.state.site);
        },
        loadSites(context, payload) {
            var filterBy = { user_id: payload.user._id }
            return SiteService.query(filterBy)
                .then(sites => {
                    context.commit({ type: 'loadSites', sites });
                    return sites;
                });
        },
        loadSitesByUserName(context, payload) {
            return SiteService.getByUserName(payload.userName)
                .then(sites => {
                    context.commit({ type: 'loadSites', sites });
                    return sites;
                });
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
        deleteSite(context, { site }) {
            return SiteService.deleteSite(site)
                .then((isDelete) => {
                    if (!isDelete) return false
                    context.commit({ type: 'deleteSite', site });
                    return true;
                })
        },

        // Current site
        loadSite(context, { id }) {
            return SiteService.getById(id)
                .then(site => {
                    context.commit({ type: 'loadSite', site });
                    return site;
                });
        }
    }
}