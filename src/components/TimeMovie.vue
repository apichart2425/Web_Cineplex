<template>
  <div>
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <div class="size_carousel" :style="{'background-image':'url('+movies[5].poster+')', }">
          </div>
          <!-- <img :src="movie[5].poster" class="size_carousel card-img" alt="..."> -->
        </div>
        <div class="col-md-8 showtime-box">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            
          </div>
          <ul class="time-list nav">
              <li class="time-item nav-item"><button class="button button-showtime active">16:45</button></li>
              <li class="time-item nav-item"><button class="button button-showtime">19:30</button></li>
              <li class="time-item nav-item"><button class="button button-showtime">22:15</button></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabMenuBar',
    components: {},
    data() {
      return {
        movies: movies,
        categories: categories,
      }
    }
  }

</script>

<style scoped>
  *{
    text-align: left;
  }
  .size_carousel {
    height: 60vh;
    width: 40vh;
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
    transition: all .2s ease-out;
}

  .button-showtime {
    min-width: 110px;
    height: 40px;
    padding: 8px;
    font-size: 16px;
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
    background: linear-gradient(90deg,#2f66cd,#4db0db 75%,#5ab6de);
}
.button-showtime:hover:enabled {
    color: #fff;
    border-color: #2d64cf;
    background-color: #2d64cf;
}

</style>
