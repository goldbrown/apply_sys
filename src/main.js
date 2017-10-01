// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import moment from './assets/moment.js'
import '../config/MyConfig.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.prototype.getCurDate = function (f) {
  var curDate = null
  if (f.trim() === 'yyyy-MM-dd') {
    var d = new Date()
    var month = d.getMonth() + 1
    var day = d.getDate()
    curDate = d.getFullYear() + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (day < 10 ? '0' : '') + day
  }
  return curDate
}
Vue.prototype.toDateString = function (mseconds, f) {
  var d = new Date(mseconds)
  var dateString = null
  if (f.trim() === 'yyyy-MM-dd') {
    var month = d.getMonth() + 1
    var day = d.getDate()
    dateString = d.getFullYear() + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (day < 10 ? '0' : '') + day
  }
  return dateString
}
Vue.prototype.handleAxiosException = function (error) {
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
}
Vue.prototype.isEmptyJson = function (obj) {
  var t
  for (t in obj) {
    return !1
  }
  return !0
}
