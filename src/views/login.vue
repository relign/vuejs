<template>
    <div class="jumbotron">
      <h1>Hello, world!</h1>
      <p>...</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
    <div class="input-group input-group-lg col-xs-20">
        <input type="text" placeholder='Username' class="form-control" name="name" value="">
    </div>
    <div class="input-group input-group-lg col-xs-20">
        <input type="password" placeholder='Password' class="form-control" name="name" value="">
    </div>
    <div class="action">
      <button type="button" class="btn btn-info btn-lg">Login</button>
      <button type="button" class="btn btn-default btn-lg">Register</button>
    </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      msg : 'You successfully read this important alert message.'
    }
  }
}

</script>
<style media="screen">
  .input-group{
    margin-bottom: 20px;
  }
</style>
