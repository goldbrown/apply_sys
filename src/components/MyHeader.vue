<template>
    
    <nav class="navbar navbar-expand navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">网申记录系统</a>
      <button class="navbar-toggler d-lg-none collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <!--<li class="nav-item active">
            <a class="nav-link" href="javascript:void">首页 <span class="sr-only">(current)</span></a>
          </li>-->
          <!--<li class="nav-item">
            <a class="nav-link" href="javascript:void">讨论区</a>
          </li>-->
          <!--<li class="nav-item">
            <a class="nav-link" href="106.14.123.17:80">刷新页面</a>
          </li>-->
          <li class="nav-item">
            <a class="nav-link" href="javascript:void" @click="switchShowMe">关于</a>
          </li>
          <div v-if="me" class="about-me">
            <ul>
              <li>功能：用来集中管理网申记录的系统</li>
              <li>项目的GitHub地址：<a href="https://github.com/brownlincoln/ApplySystem" target="_blank">ApplySystem</a></li>
              <li>我的邮箱：chrisliu1314@qq.com</li>
              <li>有问题可以给我发邮件或者在GitHub提issue</li>
            </ul>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void" @click="register">注册</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="javascript:void" @click="login">登录</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="javascript:void" @click="logout">退出</a>
          </li>         
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <a v-if="user.username" class="nav-link  user-bar" href="javascript:void">用户名：{{user.username}}</a>
          <a v-if="!user.username" class="nav-link  user-bar" href="javascript:void" @click="login">未登录</a>
        </form>
        <!--<form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="搜索" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form>-->
      </div>
    </nav>
</template>
<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="./Dashboard Template for Bootstrap_files/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="./Dashboard Template for Bootstrap_files/bootstrap.min.js"></script>
    <script src="./Dashboard Template for Bootstrap_files/holder.min.js"></script>
    <script src="./Dashboard Template for Bootstrap_files/jquery.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="./Dashboard Template for Bootstrap_files/ie10-viewport-bug-workaround.js"></script>
<script>
export default {
  props: {
    user: Object,
    userId: Number
  },
  data () {
    return {
      me: false
    }
  },
  methods: {
    // refreshPage: function () {
    //   this.$emit('refreshPage')
    // },
    register: function () {
      this.$emit('register')
    },
    login: function () {
      this.$emit('login')
    },
    logout: function () {
      this.$emit('logout')
    },
    switchShowMe: function () {
      // alert('about me')
      this.me = !this.me
    },
    resetShowMe: function () {
      this.me = false
    }
  }
}
</script>
<style scoped>
@import url('http://getbootstrap.com/favicon.ico');
@import url('./Dashboard Template for Bootstrap_files/bootstrap.min.css');
@import url('./Dashboard Template for Bootstrap_files/dashboard.css');
    .header {
        width: 100%;
        float: right;
        height: 50px;   
        background-color: rgba(7, 7, 7, 1);
    }
    .user-bar {
        /*float: right;*/
        color: white;
    }
    .about-me {
      position: absolute;
      top: 55px;
      left: 150px;
      z-index: 100;
      width: 280px;
      height: 80px;

      background-color: rgba(10, 10, 10, 0.9);
      color: white;
      font-size: 12px;
      font-family: 宋体, 微软雅黑;
    }
    a {
      text-decoration: none;
      display: inline-block;
    }
</style>
