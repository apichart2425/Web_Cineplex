<template>
  <div>
    <nav class="navbar navbar-expand-lg  navbar-bg-light">
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
              <a class="nav-link" href="#">หน้าแรก
                <span class="sr-only">(current)</span>
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CardMovie">
              <a class="nav-link" href="#">ภาพยนตร์</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="navbar-nav mr-auto">
          <li>
            <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">เข้าสู่ระบบ/สมัครสมาชิก</a>
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
#text_col{
   color : black;
}
*{
    font-size: 4vh;
    color : black;
}
</style>