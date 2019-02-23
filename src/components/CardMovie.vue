<template>
  <!-- <div class="row">
    <div class="card col-md-4" style="padding-right: 0px; padding-left:0px;" v-for="movie in movies">
      <div class="size_carousel" :style="{'background-image':'url('+movie.wallpaper+')'}">
      </div>
      <img :src="movie.poster" class=" size_carousel card-img-top rounded mx-auto d-block" alt="...">
      <div class="card-body ">
        <h4 class="card-title text-center">{{movie.name.en}}</h4>
        <h5 class="card-title text-center">{{movie.name.th}}</h5>

        <div v-html="movie.synopsis"></div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> -->
  <div class="row">
  <div class="card-deck overflow-hiden">
    <div class="col-md-3 "  v-for="movie in movies">
    <div class="card  my-2">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <img :src="movie.poster" class="card-img-top rounded mx-auto d-block">
      <div class="card-body">
        <h4 class="card-title">{{movie.name.en}}</h4>
        <h5 class="card-title">{{movie.name.th}}</h5>
        <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'cardmovie',
    props: ['movies'],
  }

</script>

<style scoped>
  .card-body{
    padding: 0px;
  }
  .size_card {
    height: 60vh;
    width: 40vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

</style>
