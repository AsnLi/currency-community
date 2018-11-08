import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';
import app from './modules/app';

export default new Vuex.Store({
    modules: {
        user,
        app
    },
    strict: process.env.NODE_ENV !== 'production',
    // plugins: []
});