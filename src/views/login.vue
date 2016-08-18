<template>
    <div class="jumbotron">
      <h1>{{msg}}</h1>
      <p>...</p>
      <p><a class="btn btn-primary btn-lg" v-link="'home'" role="button">Learn more</a></p>
    </div>
    <div class="input-group input-group-lg col-xs-20">
        <input type="text" placeholder='Username' class="form-control" name="name" value="">
    </div>
    <div class="input-group input-group-lg col-xs-20">
        <input type="password" placeholder='Password' class="form-control" name="name" value="">
    </div>
    <div class="action">
      <button type="button" class=" login btn btn-info btn-lg ">Login</button>
      <button type="button" class=" register btn btn-default btn-lg ">Register</button>
    </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      msg : 'Hello World!'
    }
  }
}

</script>
<style media="screen">
  .input-group{
    margin-bottom: 20px;
    width:100%;
  }
  .form-control{
    border-radius: 15px;
  }
  .login{
    margin-right: 30px;
  }
</style>
