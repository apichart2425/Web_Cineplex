<template>
    <div class="row" style="text-align: left;">
    <div class="form-login">
    <form role="form">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email" placeholder="Enter email" required="">
        </div>
        <div class="form-group">
            <label for="username">Password</label>
            <input type="password" class="form-control" name="password" placeholder="Enter password" required="">
        </div>
        <button class="subscribe btn btn-primary btn-block" type="button"> Login </button>
    </form>
    </div>

    <div class="form-regis">
    <form role="form">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email" placeholder="Enter email" required="">
        </div>
        <div class="form-group">
            <label for="inputPassword1">Password</label>
            <input type="password" class="form-control" name="password1" placeholder="Enter password" required="">
        </div>
        <div class="form-group">
            <label for="inputPassword2">Confirm password</label>
            <input type="password" class="form-control" name="password2" placeholder="Enter password" required="">
        </div>
        <button class="subscribe btn btn-primary btn-block" type="button"> Regigter </button>
    </form>
    </div>
  </div>
</template>


<style>
.form-login, .form-regis{
    background-color: #FAFAFA;
    padding: 18px 32px;
    border-radius: 5px;
    width: 420px;
}


/* .container {

  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
  form {
    transition: none;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .cancel {
    font-size: 12px;
    text-align: center;
    margin-top: 1em; 
}

.submit-button {
  display: block;
  background-color: #3498DB;
  height: 40px;
  border-radius: 20px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.875em;
  border: none;
  font-weight: 700;
  padding: 0 34px;
  margin: 0 auto;
}

.featured-note {
  color: #949494;
  font-size: 12px;
  margin: 4px 0px;
  line-height: 18px;
  font-style: italic;
}

form * {
  outline: none;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  background-color: #F3F4F5;
  cursor: default;
}

a {
  text-decoration: none;
  cursor: pointer;
}

::selection {
  background-color: #F5617A;
  color: #fff;
}

::-moz-selection {
  background-color: #F5617A;
  color: #fff;
} */
</style>

<script>

</script>


