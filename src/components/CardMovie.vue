<template>
  <div>
    <div class="row shadow p-3 bg-white rounded showtime-dropdown">
      <!-- Search -->
      <div class="col-md-4 mt-3">
        <div class="">
          <select v-model="selected" class="input-group size_select">
            <!-- <option placeholder="Please select one" value="Please select one">Please select one</option> -->
            <option v-for="categorie in categories" value="categorie.id">{{categorie.name}}</option>
          </select>
          <br />
        </div>
      </div>

      <!-- โรงภาพยนตร์ -->
      <div class="col-md-4 mt-3">
        <div class="input-group">
          <select v-model="selected" class="input-group size_select">
            <!-- <option placeholder="Please select one" value="Please select one">Please select one</option> -->
            <option v-for="categorie in categories" value="categorie.id">{{categorie.name}}</option>
          </select>
          <br />
        </div>
      </div>

      <!--  movie -->
      <div class="col-md-4 mt-3">
        <div class="input-group">
          <input v-model="searchText" type="text" class="form-control" placeholder="Search post" aria-label="search"
            aria-describedby="basic-addon1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search</span>
          </div>
        </div>
      </div>
    </div>
    <h1 class="display-4" style="text-align: center">ภาพยนตร์</h1>

    <div class="row ">
      <div class="card-deck overflow-hiden">
        <div class="col-md-3 " v-for="movie in movies">
          <router-link to="/movie">
          <div class="card  my-2">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <img :src="movie.poster" class="card-img-top rounded mx-auto d-block">
            <div class="card-body">
              <h4 class="card-title">{{movie.name.en}}</h4>
              <h5 class="card-title">{{movie.name.th}}</h5>
              <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
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
    name: 'cardmovie',
    props: ['movies', 'categories'],
    computed: {
      searched: function () {
        return this.blogs.filter(blog => {
          search = this.searchText.toLowerCase()
          title = blog.title.toLowerCase().includes(search)
          // content = this.blog.comments.toLowerCase().includes(search)
          return title
        })
      },
    },
  }

</script>

<style scoped>
  .showtime-dropdown {
    transform: translateY(-40%);
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

</style>
