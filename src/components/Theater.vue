<template>
  <div class="jumbotron pt-5 mb-0 pb-0">
    <div class="container">
      <div class="row">
        <!-- img -->
        <div class="col-md-3 high">
          <div class="size_carousel" :style="{'background-image':'url('+movie[0].wallpaper+')', }"></div>
        </div>

        <!-- content -->
        <div class="col-md-9 mt-0 text shadow showtime-dropdown bg-white rounded">
          <h1>{{movie[0].name.en}} - {{movie[0].name.th}}</h1>
          <span>Director : {{movie[0].director}}</span><br>
          <label ><u> ตัวอย่างภาพยนตร์ </u></label>
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
* {
  font-size: 5vh;
}
label{
  font-size: 3vh;
}
.iframe_size {
  width: 100%;
  height: 60vh;
}
h1 {
  font-size: 6vh;
}
/* *{font-family: 'Designil Font', 'Helvetica', sans-serif;} */
body {
  font-family: "Sukhumvit Set", sans-serif;
}
.iframe_size {
  width: 100%;
  height: 60vh;
}

.showtime-dropdown {
  transform: translateY(-10%);
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
