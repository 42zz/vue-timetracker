import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'default',
      component: HomeComponent
    },
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/time-entries',
      name: 'time-entries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          name: 'log-time',
          component: LogTime
        }
      ]
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }
  ]
})
