import Vue from 'vue';
import Vuex from 'vuex';
import UserModule from './modules/UserModule.js';
import SiteModule from './modules/SiteModule.js';
import EditorModule from './modules/EditorModule.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        UserModule,
        SiteModule,
        EditorModule
    }
});
