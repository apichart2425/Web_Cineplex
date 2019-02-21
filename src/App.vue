<template>
  <div id="app">
    <!-- <router-link to='/home'>home</router-link> -->
    <Navbar/>
    <MyCarousel :movies="moviesData"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import MyCarousel from "@/components/MyCarousel"
export default {
  name: 'App',
  components: {Navbar, MyCarousel},
  data () {
    return {
      moviesData: movies      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
