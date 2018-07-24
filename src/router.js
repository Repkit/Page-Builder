import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Profile from './views/Profile.vue';
import SiteEdit from './views/SiteEdit.vue';
import SiteDetails from './views/SiteDetails.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/profile', name: 'Profile', component: Profile },
        { path: '/user/:userName', name: 'Profile', component: Profile },
        { path: '/add', name: 'SiteAdd', component: SiteEdit },
        { path: '/:siteID/edit', name: 'SiteEdit', component: SiteEdit },
        { path: '/:siteID', name: 'SiteDetails', component: SiteDetails },
    ]
})
