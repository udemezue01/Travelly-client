import Vue from 'vue'
import VueRouter from 'vue-router'



// In-app views



 // The landing page Home, Password-Reset, Register and Login Views

import Landing from '@/views/Landing/Landing.vue'
import Login from '@/views/Landing/Login.vue'
import Register from '@/views/Landing/Register.vue'
import PasswordReset from '@/views/Landing/Password-Reset.vue'

// The Hotel page Hotel list, Create, Update and Details

import Hotels from '@/views/Hotels/Hotels.vue'

// The Chat page Chat list, Create, Update and Details

import Chat from '@/views/Chat/Chat.vue'

// The Feeds page Feeds list, Create, Update and Details
import Feeds from '@/views/Feeds/Feeds.vue'

// The Flight page Flight list, Create, Update and Details

import Flight from '@/views/Flight/Flight.vue'

// The Guides  page Guides list, Create, Update and Details

import Guides from '@/views/Guides/Guides.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },

    {
    path: '/feeds',
    name: 'Feeds',
    component: Feeds
  },


    {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
