<template>
  <div class="jumbotron pt-0">
    <div class="container">
      <div class="row my-5 ">
        <!-- img -->
        <div class="col-md-3 high">
          <div class="size_carousel" :style="{'background-image':'url('+movie[0].wallpaper+')', }"></div>
        </div>

        <!-- content -->
        <div class="col-md-9  text shadow showtime-dropdown bg-white rounded  ">
          <h1>{{movie[0].name.en}}</h1>
          <span>{{movie[0].name.th}}</span>
          <span v-html="movie[0].synopsis"></span>
          <!-- <button class="btn button-showtime btn-primary">ตัวอย่างภาพยนตร์</button> -->
          <Videos/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Videos from "@/components/Video"
  export default {
    name: 'theater',
    // components: {
    //   Videos,
    // },
    // props: {},

    data() {
      return {
        movie: movies,
      }
    }
  }

</script>

<style scoped>
  .showtime-dropdown {
    transform: translateY(30%);
  }

  .showtime-dropdown {
    width: 80%;
    padding: 20px;
    background-origin: padding-box;
  }

  .text {
    text-align: left;
    padding: 20px;
  }

  .high {
    height: 10vh;
  }

  .size_carousel {
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: white;
  }

</style>
