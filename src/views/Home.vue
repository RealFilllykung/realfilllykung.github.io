<template>

  <div>
    <v-btn v-on:click="goToAbout()">Click me</v-btn>
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    goToAbout(){
      this.$router.push('about')
    }
  }
}
</script>
