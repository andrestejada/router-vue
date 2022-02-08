<template>
  <h1>Pokemon Page <span>#{{id}}</span> </h1>
  <div v-if="pokemon" >
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type:Number,
      requiered:true,
    }
  },
  data(){
    return{
      pokemon:null
    }
  },
  methods:{
    async getPokemons(){
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r=>r.json())
        this.pokemon = pokemon;
        console.log(pokemon);
      } catch (error) {
        this.$router.push('/')
      }
    }
  },
  watch:{
    id(){
      this.getPokemons();
    }
  },
  created(){
    // const {id} = this.$route.params;
    // console.log(id);
    this.getPokemons()
  }
}
</script>