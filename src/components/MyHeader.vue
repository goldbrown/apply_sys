<template>
    
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="localhost:8080">网申记录系统</a>
      <button class="navbar-toggler d-lg-none collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="javascript:void">首页 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void">讨论区</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void">个人主页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void">关于</a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="搜索" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </nav>
</template>
<script>
export default {
  props: {
    user: Object
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
    .userCenter {
        font-size: 20px;
        text-align: right;
        line-height: 20px;
        height: 20px; 
        font-family: 微软雅黑,宋体;
        color: rgba(255, 255, 255, 1);
        font-weight: bold;
    }
</style>
