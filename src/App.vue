<template>
  <div id="app" class="h-screen bg-green-50 px-6 lg:px-12">

  <!-- 	<navbar> </navbar> -->
    
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
