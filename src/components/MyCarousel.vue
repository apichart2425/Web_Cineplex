<template>
  <div>
    <carousel :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="5000">
      <slide v-for="wallpapers in movies">
        <!-- <div class="img_cal" :style="{'background-image: 'url('+wallpapers.poster+')'}"></div> -->
        <div class="img_cal" :style="{'background-image':'url('+wallpapers.poster+')'}"></div>
        <!-- {{wallpapers.poster}} -->
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
