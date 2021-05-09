<template>


	<div class="space-y-20">
		

            
                <router-link to="/feeds" class="block text-gray-800 font-body font-bold tracking-wider item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news h-6 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                  <line x1="8" y1="8" x2="12" y2="8" />
                  <line x1="8" y1="12" x2="12" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </svg>
                <!-- <span class="font-body font-bold tracking-wider hidden lg:block"> Feeds </span> -->

            </router-link>



            <router-link to="/explore" class="block text-gray-800 font-body font-bold tracking-wider space-x-3 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame h-6 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.762 4.383 -2.989 5.642c-1.226 1.26 -2.011 2.598 -2.011 4.358a6 6 0 1 0 12 0c0 -1.532 -.77 -2.94 -1.714 -4c-1.786 3 -3.077 3 -4.286 2z" />
                </svg>

            <!-- <span class="font-body font-bold tracking-wider hidden lg:block"> Explore </span> -->

            </router-link>


            <router-link to = "/chat" class="block text-gray-800 space-x-2 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages h-6 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>

            <!-- <span class="font-body font-bold tracking-wider hidden lg:block"> Chat</span> -->

            </router-link>


            <router-link to="/flights" class="block text-gray-800 space-x-2 item-center"> 
         
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane h-6 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
              </svg>



           <!--  <span class="font-body font-bold tracking-wider hidden lg:block"> Flights</span> -->


            </router-link>

            <router-link to="/guide" class="block space-x-2 item-center">


               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bus h-6 w-6 mx-auto"viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="17" r="2" />
              <circle cx="18" cy="17" r="2" />
              <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
              <polyline points="16 5 17.5 12 22 12" />
              <line x1="2" y1="10" x2="17" y2="10" />
              <line x1="7" y1="5" x2="7" y2="10" />
              <line x1="12" y1="5" x2="12" y2="10" />
          </svg>
     


           <!--  <span class="font-body font-bold tracking-wider hidden text-md lg:block">Guides </span> -->

            </router-link>

                <router-link to ="/Wallet" class="block text-gray-800 space-x-2 item-center">

                <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

            <!-- <span class="font-body font-bold tracking-wider hidden text-md lg:block"> Wallet </span> -->


            </router-link> 

            <router-link to ="/Profile" class="block text-gray-800 space-x-2 item-center">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user h-6 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>

            <!-- <span class="font-body font-bold tracking-wider hidden text-md lg:block"> Profile </span> -->


            </router-link>    

           
            
	</div>


</template>


<script>
	
export default{


	data(){

		return {


		}
	},

	methods:{


	}
}

</script>