import Vue from 'vue'
import Router from 'vue-router'
import { Login, DashBoard } from '@/pages/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
