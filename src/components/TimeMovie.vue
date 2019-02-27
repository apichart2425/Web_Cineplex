<template>
  <div class="jumbotron pt-1">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary text-position " v-for="dates in dates">
          <span>{{dates.name}}</span><br>
          <span  style="font-size: 2.5vh;">{{dates.day}}</span>
        </button>
      </div>
      <div class="col-md-3"></div>
    </div>
    <Date/>
  </div>
</template>

<script>
import Date from "@/components/Date";

export default {
  name: "TimeMovie",
  components: { Date },
  data() {
    return {
      movies: movies,
      categories: categories,
      theater: theater,
      timer: timer,
      dates: [
        { id: 1, name: "Monday", day: "17/2/2029" },
        { id: 2, name: "Tuesday", day: "12/3/2029" },
        { id: 3, name: "Wednesday", day: "11/4/2029" },
        { id: 4, name: "Thursday", day: "14/5/2029" },
        { id: 5, name: "Friday", day: "15/6/2029" },
        { id: 6, name: "Sunday", day: "10/7/2029" },
        { id: 7, name: "Saturay", day: "18/8/2029" }
      ]
    };
  }
};
</script>

<style scoped>
* {
  text-align: left;
  font-size: 4vh;
}

.btn-primary:hover{
  background-color: forestgreen;
}
.btn-primary:active{
  background-color: darkcyan;
}
.text-position{
  text-align: center;
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
  background: #10df2c;
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
