<template>
  <div class="">
    <div class="row shadow p-3 bg-white rounded showtime-dropdown">
      <!-- Search -->
      <div class="col-md-3 mt-3">
        <div class>
          <select v-model="selected" class="input-group size_select">
            <option v-for="categorie in categories" value="categorie.id">{{categorie.name}}</option>
          </select>
          <br>
        </div>
      </div>

      <!-- โรงภาพยนตร์ -->
      <div class="col-md-3 mt-3">
        <div class="input-group">
          <select v-model="selected" class="input-group size_select">
            <option v-for="theater in theater" value="categorie.id">{{theater.name}}</option>
          </select>
          <br>
        </div>
      </div>
      <div class="col-md-2 mt-2">
        <router-link to="/TheaterShowTime">
          <button class="btn btn-primary" v-model="select_theater">รอบฉาย</button>
        </router-link>
      </div>

      <!--  movie -->
      <div class="col-md-4 mt-2">
        <div class="input-group">
          <input
            v-model="searchText"
            type="text"
            class="form-control"
            placeholder="Search post"
            aria-label="search"
            aria-describedby="basic-addon1"
          >
          <div class="input-group-prepend"></div>
        </div>
      </div>
    </div>

    <h1 class="display-4" style="text-align: center">ภาพยนตร์</h1>

    <div class="container">
      <div class="card-deck">
        <div class="col-md-3" v-for="movie in searchResult">
          <router-link to="/TheaterShowTime">
            <div class="card my-2">
              <img :src="movie.poster" class="card-img-top mx-auto">
              <div class="card-body">
                <h4 class="card-title">{{movie.name.en}}</h4>
                <h5 class="card-title">{{movie.name.th}}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardmovie",
  data() {
    return {
      theater: theater,
      movies:movies,
      categories:categories,
      searchText: "",
      select_theater: ""
    };
  },
  computed: {
    searchResult() {
      return this.movies.filter(movie => {
        let searchText = this.searchText.toLowerCase();
        let isMatchTitleEn = movie.name.en.toLowerCase().includes(searchText);
        let isMatchTitleTh = movie.name.th.toLowerCase().includes(searchText);
        return isMatchTitleEn | isMatchTitleTh;
      });
    }
  }
};
</script>

<style scoped>
h4,h5{
  color: darkslategrey;
}

.showtime-dropdown {
  transform: translateY(-35%);
}

.home .showtime-dropdown {
  width: 80%;
  padding: 50px;
  background-origin: padding-box;
}

.size_select {
  height: 5vh;
  text-align: center;
}

.card-body {
  padding: 0px;
}

.size_card {
  height: 60vh;
  width: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.ma-top {
  margin-top: 10px;
}
</style>