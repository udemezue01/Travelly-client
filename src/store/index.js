import Vue from 'vue'
import Vuex from 'vuex'

// The Vuex modules import

import auth from './modules/auth.js'
import booking from './modules/booking.js'

import comment from './modules/comment.js'
import guide from './modules/guide.js'

import post from './modules/post.js'
import profile from './modules/profile.js'

import review from './modules/review.js'
import wallet from './modules/wallet.js'


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
    profile,
    review,
    wallet,
  }
})
