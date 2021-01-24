import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth.js'
import comment from './modules/comment.js'
import guide from './modules/guide.js'
import post from './modules/post.js'
import profile from './modules/profile.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {

  	auth,
    comment,
    guide,
  	post,
    profile
  }
})
