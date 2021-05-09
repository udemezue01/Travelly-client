<template>
    <div class="flex h-screen ">

	<!--   The First Flex -->
    	<div class="bg-transparent h-full w-1/12 p-6 ">

  

            <SideBarNav> </SideBarNav>
               
    		

    	</div>

    <!-- End of The First Flex -->

    <!--   The Second Flex -->
    	<div class="w-10/12">
    		     <nav class="flex justify-between bg-white item-center py-4 px-6 shadow">

            <div>

                <p class="text-md text-gray-900 font-body font-semibold tracking-wider">Profile</p>
                

            </div>

            <div>
                
            </div>
            

        </nav>

         <!-- The profile card -->

        <div class="w-full rounded-lg">

            <!-- The profile cover image -->

            <img src="/img/brand/google.png" class="w-full object-center object-cover">

          <!--   End of the profile cover image -->

          <!-- Body of the profile card -->

          <div class="flex justify-between px-6 py-3 bg-white">
              <div>
                  <img src="/img/brand/google.png" class="w-8 h-8 rounded-full object-cover object-center">

              </div>

              <div>
                  
                  

              </div>

          </div>

          <!-- End of the Body of The profile card -->
            


        </div>


        <!-- End of the profile card -->

    	</div>

    <!-- End of The Second Flex -->

       
      
    </div>
</template>

<script>
import SideBarNav from '../../components/SideBarNav.vue'
export default {

components:{

  SideBarNav,

},

 data(){

  return{


  }
 },

 methods:{


 },

}
</script>

