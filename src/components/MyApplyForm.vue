<template>
  <form class="apply-form">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
   <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
   <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-default">提交</button>
  <button class="btn btn-default" @click="closeForm">取消</button>
</form>
</template>
<script>
export default {
  methods: {
    closeForm: function () {
      this.$emit('closeForm')
    }
  }
}
</script>
<style scoped>
  .apply-form {
    width: 50%;
    float: right;
    margin-right: 20%;
  }
</style>
