<template>
  <div class="pt-1">
    <div class="container mt-5" v-for="theaters,index in theater">
      <div class="showtime-cinema">{{theaters.name}}</div>
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-2">
            <h4 class="mt-5" style="text-align:center;">{{theaters.theater_num.id}}</h4>
            <!-- <div class="size_carousel" :style="{'background-image':'url('+movies[5].poster+')', }"></div> -->
            <!-- <img src="../assets/img/logo.png" class="size_carousel card-img" alt="..."> -->
          </div>
          <div class="col-md-10 showtime-box">
            <div class="card-body">
              <!-- <h5 class="card-title"></h5> -->
              <p class="card-text"><img src="../assets/img/Speake.png" alt="" style="height:5vh;weight:5vh;"> TH|EN</p>
              <p class="card-text">
                <small class="text-muted"><img src="../assets/img/clock.png" alt="" style="height:5vh;weight:5vh;"> : 120 min</small>
              </p>
            </div>
            <ul class="time-list nav">
              <li class="time-item nav-item" v-for="line,index_time in theaters.times">
                <router-link to="/Movie">
                  <button class="button button-showtime">{{timer[line-1].time_line}}</button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Date",
  components: {},
  data() {
    return {
      movies: movies,
      categories: categories,
      theater: theater,
      timer: timer
    };
  }
};
</script>

<style scoped > * {
  text-align: left;
  font-size: 4vh;
}

.showtime-cinema {
  font-size: 20px;
  color: #114c97;
  padding: 15px;
  line-height: 1;
  font-weight: 600;
  background-color: #e0e5f2;
}

.left-section {
  text-align: center;
  padding: 37px 0;
}

.text_p {
  text-align: center;
}

.size_carousel {
  height: 20vh;
  width: 20vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.time-list {
  margin-top: 20px;
}

.time-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.showtime-box .time-item {
  margin-right: 20px;
}

.showtime-box .time-item {
  float: left;
  margin-right: 20px;
  margin-bottom: 15px;
}

.button {
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  padding: 10px 12px;
  min-width: 140px;
  height: 40px;
  display: inline-block;
  -webkit-appearance: none;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-out;
}

.button-showtime {
  height: 40px;
  padding: 8px;
  font-size: 20px;
}

.button-showtime {
  color: #1e1f24;
  border: 2px solid #064cb7;
  line-height: 1;
  background: none;
}

.button-showtime.active {
  color: #fff;
  border: none;
  font-weight: 600;
  background: #2f66cd;
  background: linear-gradient(90deg, #2f66cd, #4db0db 75%, #5ab6de);
}

.button-showtime:hover:enabled {
  color: #fff;
  border-color: #2d64cf;
  background-color: #2d64cf;
}

.jumbotron {
  padding: 4rem 1rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
}
</style>
