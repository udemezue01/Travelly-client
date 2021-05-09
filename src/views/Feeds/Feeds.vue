<template>
    <div class="flex h-screen ">

	<!--   The First Flex -->
    	<div class="bg-transparent w-1/12 p-2 ">

  

            <SideBarNav> </SideBarNav>
               
    		

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

