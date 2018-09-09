import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home'
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
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }
  ]
})
