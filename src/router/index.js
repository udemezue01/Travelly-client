import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing/Landing.vue')
  },

    {
    path: '/feeds',
    name: 'Feeds',
    component: () => import(/* webpackChunkName: "about" */ '../views/Feeds/Feeds.vue')
  },


    {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing/Login.vue')
  },

     {
    path: '/flights',
    name: 'Flight',
    component: () => import(/* webpackChunkName: "about" */ '../views/Flight/Flight.vue')
  },

      {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat/Chat.vue')
  },
      {
    path: '/guide',
    name: 'Guides',
    component: () => import ('../views/Guides/Guides.vue')
  },


  
  {
    path: '/features',
    name: 'Features',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing/Features.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
