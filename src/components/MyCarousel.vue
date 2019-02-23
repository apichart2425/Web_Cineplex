<template>
  <div class="">
    <carousel :perPage="1" :paginationEnabled="false" :autoplayHoverPause="true" :autoplayTimeout="5000"  :autoplay="true" :loop="true">
\      <slide v-for="movie,index_img in movies">
        <div class="size_carousel" :style="{'background-image':'url('+movie.wallpaper+')', }">
          <div class="el">
            <div class="ml-5">
              <div class=" row">
                <div class="ml-5 col-md-9 text-left text-bg">
                  <h1>{{movie.name.en}}</h1>
                  <h4>{{movie.name.th}}</h4>
                  <h3>
                    หมวดหมู่:
                    <label v-for="categorie,index in movie.categories"> &nbsp;{{categories[index].name}}
                      <label v-if="index != movie.categories.length-1"> |</label>
                    </label>
                  </h3>
                  <a href="/showtime/movie/HO00000453" class="btn btn-primary btn-lg" :title="movie.name.th">
                    รายละเอียดหนัง</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  .el {
    background:
      linear-gradient(to bottom, transparent, black) no-repeat bottom;
    background-size: 100% 57.5%;
    height: inherit;
    background-position: bottom;
    border: 1px dotted black;
  }

  .size_carousel {
    height: 85vh;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center;
     */

  }

  .x {
    background: linear-gradient(180deg, transparent 62%, rgba(0, 0, 0, .12) 69%, rgba(0, 0, 0, .65));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000", endColorstr="#a6000000", GradientType=0);

  }

  .text-bg {
    position: absolute;
    bottom: 10%;
    color: white;
    /* background-color: wheat */
    opacity: 1;
  }

  .gradient {
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
    /* width: 100%; */
    /* height: 100%; */

  }

</style>
