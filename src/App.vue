<template>
  <div>
    <v-header v-if="!showForm" :user="user" @refreshPage="refreshPage"></v-header>
    <v-menu v-if="!showForm" :user="user"></v-menu>
    <v-content v-if="!showForm" :user="user" :flags="flags" @switchFlag="switchFlag" @addApply="addApply" @updateApply="updateApply" @removeApply="removeApply"></v-content>
    <v-apply-form v-if="showForm" :user="user" :selected="selected" @closeForm="closeForm" @submitApply="submitApply"></v-apply-form>
  </div>
</template>

 <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="./components/Dashboard Template for Bootstrap_files/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="./components/Dashboard Template for Bootstrap_files/jquery.min.js"><\\/script>')
    </script>
    <script src="./components/Dashboard Template for Bootstrap_files/popper.min.js"></script>
    <script src="./components/Dashboard Template for Bootstrap_files/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="./components/Dashboard Template for Bootstrap_files/ie10-viewport-bug-workaround.js"></script>

<script>
import MyHeader from './components/MyHeader.vue'
import MyContent from './components/MyContent.vue'
import MyMenu from './components/MyMenu.vue'
import MyApplyForm from './components/MyApplyForm.vue'
import axios from 'axios'

export default {
  data () {
    return {
      user: {},
      // 记录选中的情况
      flags: [],
      // 是否显示表单
      showForm: false,
      // 用于更新操作
      selected: Number
    }
  },
  created () {
    this.init()
  },
  methods: {
    init: function () {
      axios.get('../static/data.json').then((res) => {
        this.user = res.data.user
        var len = this.user.apply.length
        this.flags = new Array(len)
        for (var i = 0; i < len; i++) {
          this.flags[i] = false
        }
        this.selected = null
        // console.log('this is the request data')
        // console.log(this.user)
      })
    },
    switchFlag: function (index) {
      // console.log(index)
      var tmp = this.flags[index]
      this.flags.splice(index, 1, !tmp)
      // console.log(this.flags)
    },
    // 增加申请记录
    addApply: function () {
      this.showForm = !this.showForm
      // alert('addApply')
    },
    closeForm: function () {
      this.showForm = !this.showForm
      this.selected = null
    },
    submitApply: function () {
      alert('成功提交')
      this.selected = null
    },
    // 移除申请记录
    removeApply: function () {
      for (var i = this.flags.length - 1; i >= 0; i--) {
        if (this.flags[i] === true) {
          this.user.apply.splice(i, 1)
          this.flags.splice(i, 1)
          // 发起请求，删除数据
        }
      }
    },
    // 更新申请记录
    updateApply: function () {
      var marked
      var count = 0
      for (var i = this.flags.length - 1; i >= 0; i--) {
        if (this.flags[i] === true) {
          marked = i
          this.flags[i] = false
          count++
        }
      }
      if (count > 1 || count === 0) {
        alert('一次只能更新一个，请选择一个')
      }
      if (count === 1) {
        this.selected = marked
        // alert('成功更新' + marked)
        this.showForm = !this.showForm
      }
    },
    refreshPage: function () {
      this.init()
    }
  },
  components: {
    'v-header': MyHeader,
    'v-content': MyContent,
    'v-menu': MyMenu,
    'v-apply-form': MyApplyForm
  }
}
</script>

<style>
@import url('http://getbootstrap.com/favicon.ico');
@import url('./components/Dashboard Template for Bootstrap_files/bootstrap.min.css');
@import url('./components/Dashboard Template for Bootstrap_files/dashboard.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
