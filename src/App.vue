<template>
  <div id="app" class="h-full bg-indigo-50">

  	<navbar v-if="userId"> </navbar>
    
    <router-view/>
  </div>
</template>

<script >

import Navbar from './components/Navbar.vue'

export default{

 components:{

 	Navbar,

 },

 computed: {
      userId () {
        return this.$root.$data.userId
      }
    },


  data(){

    return{


    }
  },

  methods:{


    
  }
}

</script>
