<template>
  

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">



  <div class="max-w-md w-full space-y-8 rounded-lg bg-white px-8 py-8 shadow">
    <div>
      <img class="mx-auto h-12 w-auto" src="/img/logo/logo-three.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    
    </div>
    <form class="mt-8 space-y-6" action="" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm space-y-8">
        <div>
          <label for="email-address" class="text-gray-900 font-bold tracking-wider">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" v-model = "authDetails.email">
        </div>
        <div>
          <label for="password" class="">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model ="authDetails.password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-body font-medium text-gray-600 hover:text-green-600">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative font-body w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" v-on:click.prevent = "loginUser" >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: lock-closed -->
            <svg class="h-5 w-5 text-white group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>

     <!-- The social login button-->

    <div class="flex justify-between items-center mt-6">

      <div>
        Facebook login
      </div>

      <div>
        Google Login
        
      </div>

      <div>
        Vkontakke Login
      </div>
      

    </div>

 <!--    End of the social login button -->
  </div>


</div>

      

</template>

<script>

import { mapActions } from 'vuex'


export default {

 data(){

  return{

   authDetails:{

      email:"",
      password:"",

   }


  }
 },

 methods:{
  ...mapActions(['userLogin']),

   loginUser: function(){
      this.userLogin(this.authDetails)
      .then(() => this.$router.push('/feeds'))

 },
}

}
</script>

