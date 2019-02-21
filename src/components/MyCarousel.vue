<template>
  <div class="">
    <carousel :perPage="1" :paginationEnabled="false" :autoplayHoverPause="false" :autoplay="true" :loop="true"
      :autoplayTimeout="5000">
      <slide v-for="wallpapers,index_img in movies">
        <div class="movie">
          <div class="size_carousel" :style="{'background-image':'url('+wallpapers.wallpaper+')'}">
            <div class="container">
              <div class="row">
                <div class="col-md-9 text-left text-bg" >
                  <h1>{{wallpapers.name.en}}</h1>
                  <h4>{{wallpapers.name.th}}</h4>
                  <h3  >
                    หมวดหมู่:
                  <label v-for="categorie,index in categories" v-if="categorie.name[index] == wallpapers.categorie"> &nbsp;{{categorie.name}} |</label>
                </h3>
                  <a href="/showtime/movie/HO00000453" class="btn btn-primary btn-lg" title="คุซามะ อินฟินิตี้">
                    รายละเอียดหนัง</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- <img class=""alt=""> -->
      </slide>
    </carousel>

  </div>
</template>

<script>

  export default {
    name: 'MyCarousel',
    props: ['movies', 'categories'],
  }

</script>

<style scoped>
  .size_carousel {
    height: 85vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .text-bg {
    position: absolute;
    bottom: 10%;
    color: white;
    /* background-color: wheat */
    opacity: 1;
  }
</style>