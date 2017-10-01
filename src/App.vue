<template>
  <div>
    <v-header v-if="!showForm && !showReglogin" :user="user" @refreshPage="refreshPage" @register="register" 
      @login="login" @logout="logout"></v-header>    
    <v-menu v-if="!showForm && !showReglogin" :user="user"></v-menu>
    <v-content v-if="!showForm && !showReglogin" :user="user" :sortedApply="sortedApply" :sortBy="sortBy" 
      :flags="flags" @switchFlag="switchFlag" @addApply="addApply" @updateApply="updateApply" 
      @removeApply="removeApply" @exportApply="exportApply" @setSortKey="setSortKey"></v-content>    
    <v-apply-form v-if="showForm && !showReglogin" :user="user" :selected="selected" @closeForm="closeForm"
       @submitApply="submitApply"></v-apply-form>
    <v-reglogin v-if="showReglogin && !showForm" :showUsernameInfo="showUsernameInfo" @registerUser="registerUser" @existedUsername="existedUsername"
     @loginUser="loginUser" @cancelReglogin="cancelReglogin"></v-reglogin>
    <!-- <v-reglogin></v-reglogin> -->
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
import MyReglogin from './components/MyReglogin.vue'
import axios from 'axios'
// import qs from 'qs'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

export default {
  data () {
    return {
      user: {},
      // 记录选中的情况
      flags: [],
      // 是否显示表单
      showForm: false,
      // 用于更新操作
      selected: Number,
      // 用于注册和登录页面
      showReglogin: false,
      // 显示用户名占用信息
      showUsernameInfo: String,
      // 按哪个排序，默认按申请日期
      sortBy: 'applyDate',
      // 用作排序是升序还是倒序
      counter: Number
    }
  },
  computed: {
    sortedApply: function () {
      // console.log(this.user.username)
      // console.log(this.sortBy)
      if (this.isEmptyJson(this.user)) {
        return []
      } else {
        if (this.counter % 2 === 0) {
          return this.user.apply.sort(function (x, y) {
            return x[this.sortBy].localeCompare(y[this.sortBy], 'zh')
          }.bind(this))
        } else {
          return this.user.apply.sort(function (x, y) {
            return y[this.sortBy].localeCompare(x[this.sortBy], 'zh')
          }.bind(this))
        }
      }
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData: function () {
      axios({
        method: 'get',
        url: global.backendURL + '/apply/get',
        responseType: 'json'
      })
      .then(function (res) {
        // console.log(res.data)
        for (var index = 0; index < res.data.apply.length; index++) {
          if (res.data.apply[index].applyDate !== undefined) {
            res.data.apply[index].applyDate = this.toDateString(res.data.apply[index].applyDate, 'yyyy-MM-dd')
          }
          if (res.data.apply[index].endDate !== undefined) {
            res.data.apply[index].endDate = this.toDateString(res.data.apply[index].endDate, 'yyyy-MM-dd')
          }
        }
        this.user = {
          userId: res.data.userId,
          username: res.data.username,
          mail: res.data.mail,
          apply: res.data.apply
        }
        // console.log(this.user)
        var len = this.user.apply.length
        this.flags = new Array(len)
        for (var i = 0; i < len; i++) {
          this.flags[i] = false
        }
        this.selected = null
        // console.log('this is the request data')
        // console.log(this.user)
        this.counter = 0
      }.bind(this))
      .catch(function (error) {
        this.handleException(error)
      }.bind(this))
    },
    // 处理注册，登录，退出的情况
    register: function () {
      this.showReglogin = !this.showReglogin
      // console.log('showReglogin' + this.showReglogin)
    },
    registerUser: function (userData) {
      // console.log(userData)
      axios({
        method: 'get',
        url: global.backendURL + '/reg',
        params: userData
      })
      .then(function (res) {
        // console.log(res.data)
        this.showReglogin = !this.showReglogin
        this.userId = res.data.userId
        this.initData()
      }.bind(this))
      .catch(function (error) {
        this.handleException(error)
        alert('注册失败，请刷新页面或者删除cookie后再注册')
      }.bind(this))
    },
    existedUsername: function (username) {
      var userData = {
        username: username
      }
      // alert('exist username')
      axios({
        method: 'get',
        url: global.backendURL + '/username/exist',
        params: userData
      })
      .then(function (res) {
        // console.log(res.data)
        if (res.data.status === -1) {
          alert('用户名' + username + '已被占用')
          // this.showUsernameInfo = res.data.msg
        }
      })
      .catch(function (error) {
        this.handleException(error)
      }.bind(this))
    },
    login: function () {
      this.showReglogin = !this.showReglogin
    },
    loginUser: function (userData) {
      // console.log(userData)
      axios({
        method: 'get',
        url: global.backendURL + '/login',
        params: userData
      })
      .then(function (res) {
        // console.log(res.data)
        this.showReglogin = !this.showReglogin
        this.userId = res.data.userId
        this.initData()
      }.bind(this))
      .catch(function (error) {
        this.handleException(error)
        alert('登录失败，请刷新页面或者删除cookie后再登录')
      }.bind(this))
    },
    logout: function () {
      this.userId = 0
      axios({
        method: 'get',
        url: global.backendURL + '/logout'
      })
      .then(function (res) {
        // console.log(res.data)
        this.initData()
      }.bind(this))
      .catch(function (error) {
        this.handleException(error)
        this.initData()
      }.bind(this))
    },
    cancelReglogin: function () {
      this.showReglogin = !this.showReglogin
    },
    switchFlag: function (index) {
      // console.log(index)
      var tmp = this.flags[index]
      this.flags.splice(index, 1, !tmp)
      // console.log(this.flags)
    },
    // 增加申请记录
    addApply: function () {
      if (!this.isEmptyJson(this.user)) {
        this.showForm = !this.showForm
      } else {
        alert('请先注册或者登录')
      }
      // alert('addApply')
    },
    closeForm: function () {
      this.showForm = !this.showForm
      this.selected = null
    },
    submitApply: function (submitData) {
      // alert('成功提交')
      // console.log(submitData)
      // 根据applyId判断是add还是update
      var tmp
      if (submitData.applyId) {
        tmp = '/apply/update'
      } else {
        tmp = '/apply/add'
      }
      axios({
        method: 'get',
        url: global.backendURL + tmp,
        params: submitData
      })
      .then(function (res) {
        // console.log(res.data)
        this.showForm = !this.showForm
        this.initData()
      }.bind(this))
      .catch(function (error) {
        this.handleException(error)
      }.bind(this))
      this.selected = null
    },
    // 移除申请记录
    removeApply: function () {
      if (!this.isEmptyJson(this.user)) {
        for (var i = this.flags.length - 1; i >= 0; i--) {
          if (this.flags[i] === true) {
            // 模拟删除
            // this.user.apply.splice(i, 1)
            // this.flags.splice(i, 1)
            // 发起请求，删除数据
            // console.log('applyId', this.user.apply)
            axios({
              method: 'get',
              url: global.backendURL + '/apply/remove',
              params: {
                applyId: this.user.apply[i].applyId
              }
            })
            .then(function (res) {
              // console.log(res.data)
              this.initData()
            }.bind(this))
            .catch(function (error) {
              this.handleException(error)
            }.bind(this))
          }
        }
        this.initData()
      } else {
        alert('请先注册或者登录')
      }
    },
    // 更新申请记录
    updateApply: function () {
      if (!this.isEmptyJson(this.user)) {
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
          this.showForm = !this.showForm
          // 提交请求
        }
      } else {
        alert('请先注册或者登录')
      }
    },
    exportApply: function () {
      if (!this.isEmptyJson(this.user)) {
        console.log('export apply')
      } else {
        alert('请先注册或者登录')
        event.preventDefault()
      }
    },
    refreshPage: function () {
      this.initData()
    },
    handleException: function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    },
    isEmptyJson: function (obj) {
      var t
      for (t in obj) {
        return !1
      }
      return !0
    },
    // 设置sort key
    setSortKey: function (labelname) {
      this.sortBy = labelname
      // 计数器加一
      this.incrementCounter()
    },
    // 将计数器加一
    incrementCounter: function () {
      this.counter += 1
    }
  },
  components: {
    'v-header': MyHeader,
    'v-content': MyContent,
    'v-menu': MyMenu,
    'v-apply-form': MyApplyForm,
    'v-reglogin': MyReglogin
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
