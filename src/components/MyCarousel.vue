<template>
  <div class="">
    <carousel :perPage="1" :paginationEnabled="false" :autoplayHoverPause="false" :autoplay="true" :loop="true"
      :autoplayTimeout="5000">
      <slide v-for="wallpapers in movies">
        <div class="size_carousel" :style="{'background-image':'url('+wallpapers.wallpaper+')'}">
          <div class="bottom-right">Bottom Right</div>

        </div>
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
    height: 85vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .container {
    position: relative;
    text-align: center;
    color: white;
  }

  .bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }

  .top-left {
    position: absolute;
    top: 8px;
    left: 16px;
  }

  .top-right {
    position: absolute;
    top: 8px;
    right: 16px;
  }

  .bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
