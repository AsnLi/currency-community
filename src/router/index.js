import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Fastnews from '@/page/fastnews/fastnews'
import News from '@/page/news/News'
import Incident from '@/page/incident/incident'
import Circle from '@/page/circle/circle'

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
      {
        path: '/news',
        name: 'News',
        component: News
      },
      {
        path: '/incident',
        name: 'Incident',
        component: Incident
      },
      {
        path: '/circle',
        name: 'Circle',
        component: Circle
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
