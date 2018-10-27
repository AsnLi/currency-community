import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user';

export default new Vuex.Store({
    modules: {
        user,
    },
    strict: process.env.NODE_ENV !== 'production',
    // plugins: []
});