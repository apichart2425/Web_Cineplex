<template>
  <div class="" >
    <carousel :perPage="1" :paginationEnabled="false" :autoplayHoverPause="false" :autoplay="true" :loop="true" :autoplayTimeout="5000">
      <slide v-for="wallpapers in movies">
        <div class="size_carousel" :style="{'background-image':'url('+wallpapers.wallpaper+')'}"></div>
        <!-- <img class=""alt=""> -->
      </slide>
    </carousel>
    
  </div>
</template>

<script>

  export default {
    name: 'MyCarousel',
    props: ['movies'],
  }

</script>

<style scoped>
  .size_carousel {
    height: 80vh;
    /* width: auto; */
    /* padding: 50px; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

</style>
