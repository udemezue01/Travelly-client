<template>
    <div class="">

    <!-- 	The Navigational Bar -->

    	<nav class="bg-white flex justify-between px-6 py-3 shadow">

			<div class="">

				<img class="h-6 w-6 cover" src="/img/brand/directional-purple.svg" /> 
        
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

          <img src="/img/Landing.jpg" class="object-cover object-center h-6 w-6 ring-4 rounded-full" v-on:click = "isOpen = !isOpen">

        <!--   The Dropdown -->

          <div class="space-y-4 p-3 bg-white rounded-lg absolute right-0 top-0 mt-6 shadow" v-if = "isOpen">

            <a href="" class="block font-body font-medium tracking-wider"> Profile</a>

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

