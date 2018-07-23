import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Profile from './views/Profile.vue';
import SiteList from './views/SiteList.vue';
import SiteEdit from './views/SiteEdit.vue';
import SiteDetails from './views/SiteDetails.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/profile', name: 'Profile', component: Profile },
        { path: '/site', name: 'SiteList', component: SiteList },
        { path: '/site/add', name: 'SiteAdd', component: SiteEdit },
        { path: '/site/:siteID', name: 'SiteDetails', component: SiteDetails },
        { path: '/site/:siteID/edit', name: 'SiteEdit', component: SiteEdit },
    ]
})
