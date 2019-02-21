<template>
  <div id="app">
    <div>
        <Navbar/>
    </div>
    <!-- <router-link to='/home'>home</router-link> -->
    <!-- <MyCarousel :movies="movies"/> -->
    <router-view/>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar"
export default {
  name: 'App',
  components: {Navbar},
  data () {
    return {
      movies: movies
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
