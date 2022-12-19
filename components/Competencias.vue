<template>
  <div>
    <h3>{{titol}}</h3>
    <div v-for="element in llista" :key="element.text">{{element.text}} 
      <span style='margin-left:5px' v-for="estrella in element.estrellas" :key="estrella.index"> *
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      titol: {
        type:String,
        default:'Sobre mi'
      },
      llista:{
      }
    }    
  }
</script>

<style lang="scss" scoped>

</style>