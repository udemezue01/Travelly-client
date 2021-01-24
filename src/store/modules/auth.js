

import {apolloClient}  from '../../apollo.js'

import { USER_ID, AUTH_TOKEN } from '../../constants/settings'
import {SIGNIN_USER_MUTATION} from "../../graph/mutation"



const state =  {

  	token:null,
  	userId:"",
  	errorMsg:"",
  };

const getters = {

  	// isAuthenticated: state => !!state.userId,


  };

const mutations =  {

  	SET_TOKEN(state, token){
  		state.token = token
  	}
  };


const actions  =  {

  	async userLogin({commit}, authDetails){

  		try{

  			const {data} = await apolloClient.mutate({ mutation: SIGNIN_USER_MUTATION, variables: { ...authDetails } })
  			const token = JSON.stringify(data.authtoken.token)
  			commit('SET_TOKEN', token)
  			localStorage.setItem('AUTH_TOKEN', token)
  		}

  		catch(e){

  			console.log(e)
  		}
  	}


  }


  export default {

    state,
    getters,
    mutations,
    actions
  }

