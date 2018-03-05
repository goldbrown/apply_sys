<template>
  <div>
    <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <label class="nav-link my-bulletin">由于本人即将毕业，没有学生优惠了，负担不起服务器的费用。
                  所以，2018年4月6日网站将无法访问，请尽快“导出记录”（导出的记录可以用excel打开）。实在抱歉！</label>
            </li>
          </ul>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active">招聘网站</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://my.yingjiesheng.com/xuanjianghui.html" target="_blank">应届生求职网</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.liepin.com/" target="_blank">猎聘网</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://xy.51job.com/default-xs.php" target="_blank">前程无忧</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://xiaoyuan.zhaopin.com/" target="_blank">智联招聘</a>
            </li>
          </ul>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active">高校BBS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://bbs.sjtu.edu.cn/bbsdoc?board=JobInfo" target="_blank">饮水思源</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://www.newsmth.net/nForum/#!board/Career_Campus" target="_blank">水木社区</a>
            </li>
          </ul>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active">高校招生就业网</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://www.job.sjtu.edu.cn/eweb/jygl/zpfw.so" target="_blank">上海交大就业网</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://career.cic.tsinghua.edu.cn/xsglxt/f/jyxt/anony/xxfb" target="_blank">清华就业网</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://www.career.fudan.edu.cn/" target="_blank">复旦就业网</a>
            </li>
          </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    user: Object
  }
}
</script>
<style scoped>
  .my-bulletin {
    border: 1px solid red;
    color: red;
  }
</style>
