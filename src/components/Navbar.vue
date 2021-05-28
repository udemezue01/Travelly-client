<template>
    <div class="">

    <!-- 	The Navigational Bar -->

    	<nav class="bg-white flex justify-between px-6 py-4 lg:px-24 shadow">

			<div class="flex justify-between items-center space-x-3">

				<img class="h-6 w-6 cover" src="/img/logo/logo-four.svg" /> 

        <a href="" class="font-body text-sm text-gray-900 rounded-lg px-2 py-2 tracking-wider flex justify-between space-x-2 item-center hover:bg-indigo-50"> 

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news h-5 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                  <line x1="8" y1="8" x2="12" y2="8" />
                  <line x1="8" y1="12" x2="12" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
          </svg>

        <span> Feeds </span> 

      </a>

        <a href="" class="font-body text-sm text-gray-900 rounded-lg px-2 py-2 tracking-wider flex justify-between space-x-2 item-center hover:bg-indigo-50"> 

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane h-5 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
          </svg>


        <span> Flights </span> 

      </a>

        <a href="" class="font-body text-sm text-gray-900 rounded-lg px-2 py-2 tracking-wider flex justify-between space-x-2 item-center hover:bg-indigo-50"> 

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bus h-5 w-6 mx-auto"viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="17" r="2" />
              <circle cx="18" cy="17" r="2" />
              <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
              <polyline points="16 5 17.5 12 22 12" />
              <line x1="2" y1="10" x2="17" y2="10" />
              <line x1="7" y1="5" x2="7" y2="10" />
              <line x1="12" y1="5" x2="12" y2="10" />
          </svg>
     

          <span>  Guides </span>

          </a>

        <a href="" class="font-body text-sm text-gray-900 rounded-lg px-2 py-2 tracking-wider flex justify-between space-x-2 item-center hover:bg-indigo-50"> 

           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame h-5 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.762 4.383 -2.989 5.642c-1.226 1.26 -2.011 2.598 -2.011 4.358a6 6 0 1 0 12 0c0 -1.532 -.77 -2.94 -1.714 -4c-1.786 3 -3.077 3 -4.286 2z" />
                </svg>

       <span>  Explore </span> 

      </a>
        <a href="" class="font-body text-sm text-gray-900 rounded-lg px-2 py-2 tracking-wider flex justify-between space-x-2 item-center hover:bg-indigo-50">

           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages h-5 w-6 mx-auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>


        <span> Messages </span>

        </a>
        
			</div>

      <div class="flex space-x-3">

        

      </div>

			<div class="flex space-x-3 relative">

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2 h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <rect x="10" y="12" width="4" height="4" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>  

          <img src="/img/brand/google.png" class="object-cover object-center h-6 w-6 ring-2 rounded-full" v-on:click = "isOpen = !isOpen">

        <!--   The Dropdown -->

          <div class="space-y-4 p-3 bg-white rounded-lg absolute right-0 top-0 mt-6 shadow" v-if = "isOpen">

            <a href="" class="block font-body font-sm tracking-wider"> Profile</a>

            <a href="" class="block flex item-center space-x-2"> 

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user h-5 w-5" viewBox="0 0 24 24" stroke-width="2.0" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>

            <span class="font-body font-bold tracking-wider"> Account </span>

            </a>
            <a href="" class="block flex item-center" v-on:click.prevent="logout()"> 

              


              <span class="font-body font-medium tracking-wider text-red-500">  Logout </span>  

          </a>
            

          </div>

          <!-- End of the Dropdown -->

			</div>
    		

    	</nav>


    <!-- End of The Navigational Bar -->
      
    </div>
</template>

<script>
export default {

 data(){

  return{

    isOpen:false,


  }
 },

 
 methods:{

  logout(){

    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER_ID);
  }


 },

}
</script>

