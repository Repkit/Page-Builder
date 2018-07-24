import Vue from 'vue';
import '@/assets/scss/style.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        var user = localStorage.getItem('loggedInUser')
        user = JSON.parse(user)
        if (user) {
            this.$store.commit({ type: 'setUser', user })
        }
    }
}).$mount('#app')
