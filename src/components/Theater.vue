<template>
  <div class="jumbotron pt-5">
    <div class="container">
      <div class="row">
        <!-- img -->
        <div class="col-md-3 high">
          <div class="size_carousel" :style="{'background-image':'url('+movie[0].wallpaper+')', }"></div>
        </div>

        <!-- content -->
        <div class="col-md-9 mt-0 text shadow showtime-dropdown bg-white rounded">
          <h1>{{movie[0].name.en}}</h1>
          <span>{{movie[0].name.th}}</span>
          <span v-html="movie[0].synopsis"></span>
          <iframe class="iframe_size" src="https://www.youtube.com/embed/0LHxvxdRnYc"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Videos from "@/components/Video";
export default {
  name: "theater",
  components: {
    Videos
  },
  // props: {},

  data() {
    return {
      movie: movies
    };
  }
};
</script>

<style scoped>

/* *{font-family: 'Designil Font', 'Helvetica', sans-serif;} */
body {
  font-family:"Sukhumvit Set",sans-serif; 
}
.iframe_size {
  width: 100%;
  height: 60vh;
}

.showtime-dropdown {
  transform: translateY(-5%);
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
  border-radius: 0.3rem;
  background-color: white;
}
</style>
