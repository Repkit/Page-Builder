import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Profile from './views/Profile.vue';
import UserSites from './views/UserSites.vue';
import SiteEdit from './views/SiteEdit.vue';
import SiteDetails from './views/SiteDetails.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/signup', name: 'SignUp', component: SignUp },
        { path: '/profile', name: 'Profile', component: Profile },
        { path: '/user/:userName', name: 'UserSites', component: UserSites },
        { path: '/add', name: 'SiteAdd', component: SiteEdit },
        { path: '/:siteId/edit', name: 'SiteEdit', component: SiteEdit },
        { path: '/:siteId', name: 'SiteDetails', component: SiteDetails },
    ]
})
