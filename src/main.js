import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'

import 'animate.css/animate.css';



// The apollo settings

import apolloProvider from './apollo'

Vue.config.productionTip = false

new Vue({
  router, 
  apolloProvider,
  store,
  render: h => h(App)
}).$mount('#app')
