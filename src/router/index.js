 import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [

// The Landing, Login, Register, Features and Password-Reset View 
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing/Landing.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Landing/Login.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Landing/Register.vue')
  },

  {
    path: '/features',
    name: 'Features',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Landing/Features.vue')
  },


  {
    path: '/feeds',
    name: 'Feeds',
    component: () => import('../views/Feeds/Feeds.vue')
  },

  {
    path: '/flights',
    name: 'Flight',
    component: () => import('../views/Flight/Flight.vue')
  },

  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat/Chat.vue')
  },

    // The Guide List and Detail View
  {
    path: '/guide',
    name: 'Guides',
    component: () => import ('../views/Guides/Guides.vue')
  },

  {
    path: '/guide/:id',
    name: 'Guides',
    component: () => import ('../views/Guides/Guides.vue')
  },

       // The user profile View

  {
    path: '/me/:username',
    name: 'Profile',
    component: () => import ('../views/Profile/Profile.vue')
  },

  {
    path: '/explore',
    name: 'Explore',
    component: () => import ('../views/Explore/Explore.vue')
  },

  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import ('../views/Wallet/Wallet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
