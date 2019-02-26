<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">
        <a class="navbar-left ml-5">
          <img src="../assets/img/logo.png" img style="width: 150px;">
        </a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Movie">
              <a class="nav-link" href="#">ที่นั่ง</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PayMent">
              <a class="nav-link" href="#">payment</a>
            </router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>-->
          <router-link to="/TheaterShowTime">
            <a class="nav-link" href="#">รอบหนัง</a>
          </router-link>
        </ul>
      </div>
      <div>
        <ul class="navbar-nav mr-auto">
          <li>
            <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">LogIn/Register</a>
            <Register/>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "Nav",
  components: { Login, Register }
};
</script>

<style scoped>
.btn-bg {
  background-color: white;
}
</style>