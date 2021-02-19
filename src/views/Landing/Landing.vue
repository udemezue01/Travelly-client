<template>
    <div class="px-6 lg:px-24 relative " >

    	<!-- The Transparent Navigational Bar -->

    	<nav class="bg-transparent items-center flex justify-between py-3">
    		
    		<div>
    			
    			<img  class="h-9 w-9 object-cover object-center" src="/img/logo/logo-three.svg">

    		</div>

        <div class="flex space-x-4 items-center hidden lg:block">

          <a href="" class="font-medium tracking-wider text-gray-900">Features </a>
          <a href="" class="font-medium tracking-wider text-gray-900">Explore </a>
          <a href="" class="font-medium tracking-wider text-gray-900"> Blog </a>
          

        </div>


    		<div class="flex space-x-4 items-center hidden lg:block">
                    
                    <router-link to="/register" class="px-3 py-3 bg-indigo-600 text-white font-medium rounded-md tracking-wider"> Get Started</router-link>

                    
                    <router-link to="/login" class="px-3 py-3 bg-transparent text-indigo-600 ring-1 ring-indigo-600 font-medium rounded-md tracking-wider"> Login</router-link>

      </div>

      <!-- The toggle navigational section -->

      <div class="items-center block lg:hidden">

        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        
      </div>

      <!-- End of the toggle navigational section -->

    	</nav>

    	<!-- End of The Transparent Navigational Bar -->

        <!-- The Hero Section -->

    	<section class="flex justify-between h-screen">

    		<div class="mt-18 lg:w-1/2">

                <h1 class="text-7xl text-gray-900 mt-20 font-black tracking-wider">Travelly </h1>

    			<h3 class="text-4xl text-gray-900 mt-8 font-medium tracking-wide">Travel Social Network </h3>
    			<p class="mt-8 text-2xl font-medium text-gray-900 tracking-wide"> All-in-one Travel solution, Connect,<br> Book Flights & Get a Tour  Guides</p>

                <!-- The button section -->

                <div class="flex mt-12 space-x-8">
                    
                    <a href="" class="px-3 py-3 bg-indigo-600 text-white font-bold rounded-lg tracking-wider"> Get Started</a>
                    <a href="" class="px-3 py-3 bg-transparent text-indigo-600 ring-1 ring-indigo-600 font-medium rounded-md tracking-wider"> Learn More</a>

                </div>


               <!--  End Of The Hero Section -->

    		</div>

    		<div class="hidden lg:block">
    			
                <img src="/img/brand/social-rafiki.svg" class="object-center object-cover rounded-lg" height="800px" width="800px">

    		</div>

    	</section>

        <!-- End Of The Introductory Section -->

      

      <!--  The footer section -->
      <footer class="bg-white absolute ">

        <div class="space-y-2">
          

        </div>

        <div class="space-y-2">
          

        </div>

        <div class="space-y-2">
          

        </div>

        <div class="space-y-2">
          

        </div>


    </footer>



       <!-- End of the footer section -->


      
    </div>
</template>

<script>

export default {

 data(){

  return{


  }
 },

 methods:{


 },

}
</script>

