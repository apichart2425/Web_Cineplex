<template>
  <div>
    <div id="home">
      <!-- <img src="../assets/logo.png"> -->
      <MyCarousel class="mx-3" :movies="movies" :categories="categories"/>
    </div>
  </div>
</template>

<script>
  import MyCarousel from "@/components/MyCarousel"
  export default {
    name: 'Home',
    components: {MyCarousel},
    data () {
    return {
      movies: movies,
      categories:categories,
    }
  }
  }

</script>

<style>
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

</style>
