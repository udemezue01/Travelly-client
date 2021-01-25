<template>
    <div class="px-6 lg:px-24" >

    	<!-- The Transparent Navigational Bar -->

    	<nav class="bg-transparent items-center flex justify-between py-3">
    		
    		<div>
    			
    			<img  class="h-9 w-9 object-cover object-center" src="/img/logo/logo-three.svg">

    		</div>

    		<div class="flex space-x-4 items-center">
                    
                    <router-link to="/register" class="px-3 py-3 bg-indigo-600 text-white font-bold rounded-lg"> Get Started</router-link>

                    
                    <router-link to="/login" class="px-3 py-3 bg-gray-800 text-white font-bold rounded-lg"> Login</router-link>

                </div>

    	</nav>

    	<!-- End of The Transparent Navigational Bar -->

        <!-- The Hero Section -->

    	<section class="flex justify-between">

    		<div class="mt-18 lg:w-1/2">

                <h1 class="text-7xl text-gray-900 mt-20 font-black tracking-wider">Travelly </h1>

    			<h3 class="text-4xl text-gray-900 mt-8 font-medium tracking-wider">Travel Social Network </h3>
    			<p class="mt-8 text-2xl font-body font-medium text-gray-900 tracking-wider"> All-in-one Travel solution, Connect,<br> Book Flights & Get a Tour  Guides</p>

                <!-- The button section -->

                <div class="flex mt-12 space-x-4">
                    
                    <a href="" class="px-5 py-4 bg-indigo-600 text-white font-bold rounded-lg tracking-wider"> Get Started</a>
                    <a href="" class="px-5 py-4 bg-gray-800 text-white font-bold rounded-lg tracking-wider"> Learn More</a>

                </div>


               <!--  End Of The Hero Section -->

    		</div>

    		<div class="hidden lg:block">
    			
                <img src="/img/brand/social-rafiki.svg" class="object-center object-cover rounded-lg" height="800px" width="800px">

    		</div>

    	</section>

        <!-- End Of The Introductory Section -->

      <!--   The mobile app section -->

      <section class="mt-24">


        <h1 class="text-center text-4xl font-black text-gray-900 tracking-wider"> Go Mobile With Ease</h1>

        <p class="text-center text-2xl font-ordinary mt-12 text-gray-900 tracking-wider font-body"> With out mobile app, you have absolutely nothing to worry when it comes to handling all your travel needs</p>

        <div class="mt-12 flex justify-center space-x-10 ">

            <img src="/img/brand/apple.png" height="150px" width="150px" class="object-cover object-center rounded-lg ">
            <img src="/img/brand/google.png" height="150px" width="150px" class="object-cover object-center ">
            
        </div>
          


      </section>



        <!-- End of the mobile app section -->

        

        <!--  The First Feautured Section -->

       <section class="mt-18 flex">
           
  
                    <!-- Connect With Other Travellers -->

                <div class="hidden lg:block">

                    <img src="/img/brand/newyork-rafiki.svg" class="object-center object-cover rounded-lg" height="800px" width="800px">

                </div>



                <div class="mt-18 w-full lg:w-1/2">

                    <h1 class="mt-36 text-gray-900 text-4xl font-bold tracking-wider font-body"> Connect With Other Travellers</h1>

                    <p class="mt-12 text-gray-900 text-2xl font-medium tracking-wider font-body">Dont miss out on the opportunity to connect with other travellers going in your direction.</p>

                    <div class="mt-12">
                          <a href="" class=" px-5 py-4 bg-indigo-600 text-white font-bold rounded-lg tracking-wider"> Get started</a>

                    </div>

                  



                </div>
                

        </section>

            <!--   End Of The First Featured Section -->



            <!--  The Second Feautured Section -->
        <section class="mt-18 flex">

                <!-- Book Cheap Flights, Hotel and Tours -->

            <div class="w-full lg:block">

                  <h1 class="mt-36 text-gray-900 text-4xl font-bold tracking-wider font-body"> Book a Travel Guide

                  </h1>

                  <p class="mt-12 text-gray-900 text-2xl font-medium tracking-wider font-body">Book a travel guide to help you explore your most prefered destination.</p>

                    <div class="mt-12">
                          <a href="" class=" px-5 py-4 bg-indigo-600 text-white font-bold rounded-lg tracking-wider"> Get started</a>

                    </div>

                    <!-- End of the get started button -->

            </div>

            <div class="hidden lg:block">

                    <img src="/img/brand/tokyo-rafiki.svg" class="object-center object-cover rounded-lg" height="1500px" width="1500px">
                

            </div>

        </section>

            <!--   End Of The Second Featured Section -->


            <!--  The Third Feautured Section -->
            <section class=" mt-18 flex">



             <!--    Book a Travel Guide -->
                            <div class="hidden lg:block">

                    <img src="/img/brand/mex-rafiki.svg" class="object-center object-cover rounded-lg" height="800px" width="800px">

                </div>



                <div class="mt-18 w-full lg:w-1/2">

                    <h1 class="mt-36 text-gray-900 text-4xl font-bold tracking-wider font-body"> Book a Cheap Flight tickets

                    </h1>

                     <p class="mt-12 text-gray-900 text-2xl font-medium tracking-wider font-body">Get the best flight deals on your next trip.</p>

                    <div class="mt-12">
                          <a href="" class=" px-5 py-4 bg-indigo-600 text-white font-bold rounded-lg tracking-wider"> Get started</a>

                    </div>



                </div>
                

            <!--   End Of The Third Featured Section -->



       </section>



       <!--  End Of The Featured Section -->

      <!--  The footer section -->
      <footer>


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

