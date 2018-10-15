import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Fastnews from '@/page/fastnews/fastnews'
import News from './news'
import Threestep from '@/page/threestep/threestep'
import Fourstep from '@/page/fourstep/fourstep'

import Quotes from '@/page/quotes/quotes'

import ajaxtest from '@/page/fastnews/ajaxtest'


Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/fastnews',
        name: 'Fastnews',
        component: Fastnews,
        children: [
          {
            path: '/ajaxtest',
            name: 'ajaxtest',
            component: ajaxtest
          }
        ]
      },
      // {
      //   path: '/news',
      //   name: 'News',
      //   component: News
      // },
      {
        path: '/threestep',
        name: 'Threestep',
        component: Threestep
      },
      {
        path: '/fourstep',
        name: 'Fourstep',
        component: Fourstep
      },
      {
        path: '/quotes_all',
        name: 'Quotes',
        component: Quotes
      }
    ]
  }]


const router = new Router({
  mode: 'history',
  routes
})

export default router
