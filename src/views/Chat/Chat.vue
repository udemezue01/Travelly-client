<template>
    <div class="flex h-screen ">

    <!--   The First Flex -->
        <div class="bg-transparent h-full w-1/12 p-6 ">

  

            <SideBarNav> </SideBarNav>
               
            

        </div>

    <!-- End of The First Flex -->

    <!--   The Second Flex -->
        <div class="w-8/12">
                 <nav class="flex justify-between bg-white item-center py-4 px-6 shadow">

            <div>

                <p class="text-md text-gray-900 font-body font-semibold tracking-wider">Chat</p>
                

            </div>

            <div>
                
            </div>
            

        </nav>

        </div>

    <!-- End of The Second Flex -->


    <!--   The Third Flex -->
        <div class="w-2/12">
            

        </div>

    <!-- End of The Third Flex -->
      
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

