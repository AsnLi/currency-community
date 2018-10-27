// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import api from './api/index';
Vue.use(api);

import Components from './components';
Object.keys(Components).forEach(compName => {
  Vue.component(compName, Components[compName]);
});

import store from './store';

import bus from './router/eventBus';
Vue.prototype.$Bus = bus

import './styles/base.styl';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
