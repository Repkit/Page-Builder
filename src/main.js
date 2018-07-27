import Vue from 'vue';
import axios from 'axios';
import VueSplit from 'vue-split-panel';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faClone, faArrowsAlt, faEdit, faGripVertical, faGripHorizontal, faFont, faList,
    faBandAid, faDivide, faImages, faVideo, faMapMarkedAlt, faClock, faServer, faLayerGroup, faLink
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/assets/scss/style.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
Vue.use(VueSplit);

library.add(faTrashAlt, faClone, faArrowsAlt, faEdit, faGripVertical, faGripHorizontal, faFont, faList,
    faBandAid, faDivide, faImages, faVideo, faMapMarkedAlt, faClock, faServer, faLayerGroup, faLink,
    faFacebookSquare, faTwitterSquare, faLinkedin);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        var user = localStorage.getItem('loggedInUser');
        user = JSON.parse(user);
        if (user) {
            this.$store.commit({ type: 'setUser', user })
        }
    }
}).$mount('#app');
