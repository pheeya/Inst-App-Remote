import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from "./views/User/Profile"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/profle',
      name:'profile',
      component:Profile
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/User/Profile.vue')
    }
   
  ]
})
