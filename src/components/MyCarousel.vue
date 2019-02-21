<template>
  <div>
    <carousel :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="5000">
      <slide v-for="wallpapers in movies">
        <!-- <img :src="img.poster" alt=""> -->
        <!-- <div class="img_cal" :style="{'background-image: 'url('+img.poster+')'}"></div> -->
        <div class="img_cal" :style="{'background-image':'url('+wallpapers.wallpaper+')'}"></div>
        <!-- {{wallpapers.wallpaper}} -->
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
  .img_cal {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

</style>
