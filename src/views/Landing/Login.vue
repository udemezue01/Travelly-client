<template>
  

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">



  <div class="max-w-md w-full space-y-8 rounded-lg bg-white px-8 py-8 shadow">
    <div>
      <img class="mx-auto h-12 w-auto" src="/img/logo/logo-three.svg" alt="Workflow">
      <h2 class="font-body mt-6 text-center text-xl font-medium text-gray-900">
        Sign in to your account
      </h2>
    
    </div>
    <form class="mt-8 space-y-6" action="" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm space-y-8">
        <div>
          <label for="email-address" class="font-body text-gray-900 font-medium tracking-wider">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" v-model = "authDetails.email">
        </div>
        <div>
          <label for="password" class="font-body font-medium text-gray-900">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model ="authDetails.password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900 font-body tracking-wider">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-body font-medium text-gray-600 tracking-wider hover:text-green-600">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative font-body w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white font-body tracking-wider bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" v-on:click.prevent = "loginUser" >
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
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>
      </div>

      <div>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
</svg>
        
      </div>

      <div>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
</svg>
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

