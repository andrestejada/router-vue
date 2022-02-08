<template>
  <div>
      <!-- <router-link :to="{name:'home'}" >Pokemon List</router-link>
      <router-link :to="{name:'about'}" >about</router-link>
      <router-link :to="{name:'pokemon-id',params:{id:85}}" >Pokemon Page</router-link> -->
      <CustomLink v-for="link in links" :key="link.to" :link="link"/>
  </div>  
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  data(){
    return{
      links:[
        {to:'pokemon-home',name:'Pokemons'},
        {to:'pokemon-id',name:'Por ID',id:100},
        {to:'pokemon-about',name:'About'},

        {to:'dbz-characters',name:'Characters'},
        {to:'dbz-about',name:'About -dbz'},

        {to:'https://google.com',name:'Google'},
      ]
    }
  },
  components:{
    CustomLink:defineAsyncComponent(()=>import('./CustomLink'))
  }
}
</script>

<style scoped>
  div{
    padding: 0 30px;  
  }

  div a {
    font-weight: bold;
    color:#2c3e50;
    margin: 0 10px;
  }

  .router-link-exact-active{
    color: #42b983;
    
  }
</style>