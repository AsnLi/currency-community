import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/page/home/Hello'
import Fastnews from '@/page/fastnews/fastnews'
import Secondstep from '@/page/secondstep/secondstep'
import Threestep from '@/page/threestep/threestep'
import Fourstep from '@/page/fourstep/fourstep'
import Quotes from '@/page/quotes/quotes'
import ajaxtest from '@/page/fastnews/ajaxtest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/fastnews',
          name: 'fastnews',
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
          path: '/secondstep',
          name: 'Secondstep',
          component: Secondstep
        },
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
    }
  ]
})
