import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';

import UserSignUp from './views/UserSignUp.vue';
import UserProfile from './views/UserProfile.vue';
import UserEdit from './views/UserEdit.vue';
import UserSites from './views/UserSites.vue';

import SiteEdit from './views/SiteEdit.vue';
import SiteDetails from './views/SiteDetails.vue';

Vue.use(Router);

export default new Router({
    routes: [
        // Marketing Pages
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/notfound', name: 'NotFound', component: NotFound },

        // User
        { path: '/signup', name: 'UserSignUp', component: UserSignUp },
        { path: '/profile', name: 'UserProfile', component: UserProfile },
        { path: '/profile/edit', name: 'UserEdit', component: UserEdit },
        { path: '/user/:userName', name: 'UserSites', component: UserSites },

        // Sites
        { path: '/add', name: 'SiteAdd', component: SiteEdit },
        { path: '/:siteId/edit', name: 'SiteEdit', component: SiteEdit },
        { path: '/:siteId', name: 'SiteDetails', component: SiteDetails },
    ]
})
