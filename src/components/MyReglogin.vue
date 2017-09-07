<template>
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">请注册或者登录</h2>
        <label for="username" class="sr-only">用户名</label>
        <input type="text" id="username" v-model="username" class="form-control" placeholder="用户名" required="" autofocus="">
        <label for="password" class="sr-only">密码</label>
        <input type="password" id="password" v-model="password" class="form-control" placeholder="密码" required="">
        <button class="btn btn-md btn-primary" type="submit" @click="registerUser">注册</button>
        <button class="btn btn-md btn-primary" type="submit" @click="loginUser">登录</button>
        <button class="btn btn-md btn-danger" type="submit" @click="cancel">取消</button>
      </form>
    </div> <!-- /container -->
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    registerUser: function () {
      var userData = {
        username: this.username,
        password: this.password
      }
      console.log(userData)
      this.$emit('registerUser', userData)
    },
    loginUser: function () {
      var userData = {
        username: this.username,
        password: this.password
      }
      console.log(userData)
      this.$emit('loginUser', userData)
    },
    cancel: function () {
      this.$emit('cancelReglogin')
    }
  }
}
</script>
<style scoped>
@import url('./Signin Template for Bootstrap_files/signin.css');
</style>