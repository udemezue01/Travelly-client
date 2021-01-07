<template>
    <div class="flex h-screen ">

	<!--   The First Flex -->
    	<div class="bg-white w-2/12 p-6">

            <div class="space-y-6">
                <a href="" class="block text-gray-800 font-body font-bold tracking-wider flex space-x-3 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                  <line x1="8" y1="8" x2="12" y2="8" />
                  <line x1="8" y1="12" x2="12" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </svg>
                <span class="font-body font-bold tracking-wider hidden lg:block"> Feeds </span>

            </a>



            <a href="" class="block text-gray-800 font-body font-bold tracking-wider flex space-x-3 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.762 4.383 -2.989 5.642c-1.226 1.26 -2.011 2.598 -2.011 4.358a6 6 0 1 0 12 0c0 -1.532 -.77 -2.94 -1.714 -4c-1.786 3 -3.077 3 -4.286 2z" />
                </svg>

            <span class="font-body font-bold tracking-wider hidden lg:block"> Explore </span>

            </a>


            <router-link to = "/chat" class="block text-gray-800  flex space-x-2 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>

            <span class="font-body font-bold tracking-wider hidden lg:block"> Chat</span>

            </router-link>


            <router-link to="/flights" class="block text-gray-800 flex space-x-2 item-center"> 
         
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
              </svg>



            <span class="font-body font-bold tracking-wider hidden lg:block"> Flights</span>


            </router-link>

            <router-link to="/guide" class="block flex space-x-2 item-center">


               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bus h-6 w-6"viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="17" r="2" />
              <circle cx="18" cy="17" r="2" />
              <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
              <polyline points="16 5 17.5 12 22 12" />
              <line x1="2" y1="10" x2="17" y2="10" />
              <line x1="7" y1="5" x2="7" y2="10" />
              <line x1="12" y1="5" x2="12" y2="10" />
          </svg>
     


            <span class="font-body font-bold tracking-wider hidden text-md lg:block">Guides </span>

            </router-link>

            <a href="" class="block text-gray-800 flex space-x-2 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>

            <span class="font-body font-bold tracking-wider hidden text-md lg:block"> Profile </span>


            </a>


            </div>

      
    		

    	</div>

    <!-- End of The First Flex -->

    <!--   The Second Flex -->
    	<div class="w-8/12">
    		

    	</div>

    <!-- End of The Second Flex -->


    <!--   The Third Flex -->
    	<div class="w-2/12">
    		

    	</div>

    <!-- End of The Third Flex -->
      
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

