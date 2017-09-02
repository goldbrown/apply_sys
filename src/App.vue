<template>
  <div>
    <v-header :user="user"></v-header>
    <v-menu :user="user"></v-menu>
    <v-content :user="user" :flags="flags" @switchFlag="switchFlag"></v-content>
  </div>
</template>

 <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="./components/Dashboard Template for Bootstrap_files/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="./components/Dashboard Template for Bootstrap_files/popper.min.js"></script>
    <script src="./components/Dashboard Template for Bootstrap_files/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="./components/Dashboard Template for Bootstrap_files/ie10-viewport-bug-workaround.js"></script>

<script>
import MyHeader from './components/MyHeader.vue'
import MyContent from './components/MyContent.vue'
import MyMenu from './components/MyMenu.vue'
import axios from 'axios'

export default {
  data () {
    return {
      user: {},
      flags: []
    }
  },
  created () {
    axios.get('../static/data.json').then((res) => {
      this.user = res.data.user
      var len = this.user.apply.length
      this.flags = new Array(len)
      for (var i = 0; i < len; i++) {
        this.flags[i] = false
      }
      // console.log('this is the request data')
      // console.log(this.user)
    })
  },
  methods: {
    switchFlag: function (index) {
      // console.log(index)
      var tmp = this.flags[index]
      this.flags.splice(index, 1, !tmp)
      // console.log(this.flags)
    }
  },
  components: {
    'v-header': MyHeader,
    'v-content': MyContent,
    'v-menu': MyMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
