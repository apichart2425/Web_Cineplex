<template>
  <div class="card my-5 mx-5" style="width: 18rem;">
    <img src="../assets/img/logo.png" class="card-img-top size_select ml-3 mt-2" alt="...">
    <div class="card-body ml-2">
      <h3 class="card-title"><b>MOVIE : {{movies[0].name.en}}</b></h3>
      <label for="">Location :{{theaters[0].name}} ({{theaters[0].theater_num.id}})</label><br>
      <span class="card-text">SEAT : E12 </span>
      <span class="card-text">TIME : 17:00,  DATE: 17/9/2202</span>
    </div>
  </div>
  <!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img src>
      <h3 class="card-title">{{movies[0].name.en}}</h3>
      <h4 class="card-text">SEAT : E12</h4>
      <h5 class="card-text">TIME : 17:00, DATE: 17/9/2202</h5>
    </div>
  </div> -->
  <!-- class="col-md-3 size_img_card card-img-top my-2 mx-2" -->
</template>
<script>
export default {
  data() {
    return {
      movies: movies,
      theaters:theater,
    };
  }
};
</script>
<style scoped>
* {
  text-align: left;
}
.size_select {
    width: 33vh;
}

.btn-size {
  min-width: 1vh;
}
.size_img_card {
  background-position: left;
  width: 30vh;
  height: 20vh;
}
.card-body {
  padding: 0;
}
</style>
