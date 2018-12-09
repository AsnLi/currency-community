import Vue from 'vue'
import Router from 'vue-router'

import HomeRoute from './home'
import NewsRoute from './news';
import IncidentRoute from './incident'
import CircleRoute from './circle'
import QuotesRoute from './quotes'
import ToolRoute from './tool'

import store from '@/store';
Vue.use(Router)

const routes = [{
  path: '/',
  redirect: {
    name: 'home'
  }
},
  ...HomeRoute.concat(NewsRoute, IncidentRoute, CircleRoute, QuotesRoute, ToolRoute)
];

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, _) => {
  if (to.matched.some(record => record.meta.activeItem)) {
    store.commit('updateNavigationBar', to.meta.activeItem);
  }
})

export default router
