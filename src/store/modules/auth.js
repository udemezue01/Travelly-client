
// The apolloClient Trigger


import { apolloClient } from '../../apollo'

import {USER_ID, AUTH_TOKEN } from '../../constants/settings'

// The User Login mutation

import {SIGNIN_USER_MUTATION} from "../../graph/auth/mutation"



const state =  {

  	token:null,
  	userId:"",
  	errorMsg:"",
  };

const getters = {

  	isAuthenticated: state => !!state.userId,


  };

const mutations =  {

  SET_TOKEN(state, token){
  		state.token = token
  	},


  SET_USER_ID(state, userId){
      state.userId = userId
    },

  ERR_TOKEN(state, errorMsg){

      state.errorMsg = err
    }
  };


const actions  =  {

  	async userLogin({commit}, authDetails){

  		try{

  			const response = await apolloClient.mutate({ mutation: SIGNIN_USER_MUTATION, variables: { ...authDetails } })
  			const token = JSON.stringify(response.tokenAuth.token)
        const userId = JSON.stringify(response.tokenAuth.user.id)
        console.log(token)
        console.log(userId)
  			commit('SET_TOKEN', token)
        commit ('SET_USER_ID', userId)

  			localStorage.setItem('AUTH_TOKEN', token)
        localStorage.setItem('USER_ID', userId)
  		}

  		catch(e){

  			console.log(e)
  		}
  	},

    async userRegister({commit}, registerDetails){

      try{


      }
        catch(e){


        }

    },

    async passwordReset({commit}, resetDetails){

      try{


      }
      catch(e){

        
      }

    },


  }


  export default {

    state,
    getters,
    mutations,
    actions
  }

