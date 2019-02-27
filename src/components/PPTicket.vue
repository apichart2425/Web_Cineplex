<template>
  <div class="card my-5 mx-5" style="width: 18rem;">
    <img src="../assets/img/logo.png" class="card-img-top size_select ml-5 mt-3" alt="...">
    <div class="card-body ml-2">
      <h1 class="card-title " style="">
        <b>MOVIE : {{movies[0].name.en}}</b>
      </h1>
      <label for>Location :{{theaters[0].name}} ({{theaters[0].theater_num.id}})</label>
      <br>
      <span class="card-text">SEAT : E12</span>
      <span class="card-text">TIME : 17:00, DATE: 17/9/2202</span>
      <span>{{name}}</span>
    </div>
    <img src="../assets/img/Paypal.png" class="card-img-top size_barcode ml-5 my-3" alt="...">
  </div>
</template>
<script>
export default {
  props:["name"],
  data() {
    return {
      movies: movies,
      theaters: theater
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
.card-title{
    text-align: center;
}
.btn-size {
  min-width: 1vh;
}
.size_img_card {
  background-position: left;
  width: 30vh;
  height: 20vh;
}
.size_barcode {
  width: 30vh;
  height: 10vh;
}
.card-body {
  padding: 0;
}
</style>
