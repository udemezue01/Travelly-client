<template>
  <div id="app" class="h-full bg-blue-100">

  	<!-- <navbar> </navbar> -->
    
    <router-view/>
  </div>
</template>

<script >

import Navbar from './components/Navbar.vue'

export default{

 components:{

 	Navbar,

 },

  data(){

    return{


    }
  },

  methods:{


    
  }
}

</script>
