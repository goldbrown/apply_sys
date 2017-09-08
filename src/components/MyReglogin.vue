<template>
    <div class="container">
      <form class="form-signin">
        <h4 class="form-signin-heading">请登录</h4>
        <label for="username" class="sr-only">用户名</label>
        <input type="text" id="username" v-model="loginUsername" class="form-control" placeholder="用户名" autofocus="">
        <label for="password" class="sr-only">密码</label>
        <input type="password" id="password" v-model="loginPassword" class="form-control" placeholder="密码">
        <button class="btn btn-md btn-primary" type="submit" @click="loginUser">登录</button>
        <button class="btn btn-md btn-danger" type="submit" @click="cancel">取消</button>
        <hr/>
        <h3>或者</h3>
        <hr/>
        <h4 class="form-signin-heading">请注册</h4>
        <label for="username" class="sr-only">用户名</label>
        <input type="text" id="username" v-model="regUsername" @blur="existedUsername" class="form-control" placeholder="用户名" autofocus="">
        <!-- <label v-if="showUsernameInfo">{{showUsernameInfo}}</label> -->
        <label for="password" class="sr-only">密码</label>
        <input type="password" id="password" v-model="regPassword" class="form-control" placeholder="密码">
        <button class="btn btn-md btn-primary" type="submit" @click="registerUser">注册</button>
        <button class="btn btn-md btn-danger" type="submit" @click="cancel">取消</button>
      </form>
    </div> <!-- /container -->

</template>
<script>
export default {
  props: {
    showUsernameInfo: String
  },
  data () {
    return {
      loginUsername: '',
      loginPassword: '',
      regUsername: '',
      regPassword: ''
    }
  },
  methods: {
    registerUser: function () {
      var userData = {
        username: this.regUsername,
        password: this.regPassword
      }
      // console.log(userData)
      this.$emit('registerUser', userData)
    },
    loginUser: function () {
      var userData = {
        username: this.loginUsername,
        password: this.loginPassword
      }
      // console.log(userData)
      this.$emit('loginUser', userData)
    },
    cancel: function () {
      this.$emit('cancelReglogin')
    },
    existedUsername: function () {
      // alert('blur')
      if (this.regUsername !== null && this.regUsername.trim() !== '') {
        this.$emit('existedUsername', this.regUsername)
      }
    }
  }
}
</script>
<style scoped>
@import url('./Signin Template for Bootstrap_files/signin.css');
</style>