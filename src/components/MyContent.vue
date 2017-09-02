<template>

  <main class="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
          <h2>申请记录</h2>
          <div class="table-responsive">
            <button class="btn btn-success" @click="addApply">增加</button>
            <button class="btn btn-danger" @click="removeApply">删除</button>
            <button class="btn btn-info" @click="updateApply">更新</button>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th></th>
                 <th class="ui-state-default sorting">公司  <i class="fa fa-sort" aria-hidden="true"></i></th>
                  <th class="ui-state-default sorting">申请日期  <i class="fa fa-sort" aria-hidden="true"></i></th>
                  <th class="ui-state-default sorting">状态  <i class="fa fa-sort" aria-hidden="true"></i></th>
                  <th class="ui-stae-default sorting">最后一面的日期 <i class="fa fa-sort" aria-hidden="true"></i></th>
                  <th class="ui-stae-default sorting">内推 <i class="fa fa-sort" aria-hidden="true"></i></th>
                  <th class="ui-stae-default sorting">预期结果 <i class="fa fa-sort" aria-hidden="true"></i></th>
                  <th class="ui-stae-default sorting">实际结果 <i class="fa fa-sort" aria-hidden="true"></i></th>
                </tr>
              </thead>
              <tbody>
                
                <tr v-for="(item, index) in user.apply">
                  <th v-if="!flags[index]"><i class="fa fa-square-o" aria-hidden="true"  @click="switchFlag(index)"></i></th>
                  <th v-if="flags[index]"><i class="fa fa-check-square-o" aria-hidden="true"  @click="switchFlag(index)"></i></th>
                  <th class="ui-state-default">{{item.company}}</th>
                  <th class="ui-state-default">{{item.apply_date}}</th>
                  <th class="ui-state-default">{{item.status}}</th>
                  <th class="ui-state-default">{{item.end_date}}</th>
                  <th class="ui-state-default">{{item.recommend}}</th>
                  <th class="ui-state-default">{{item.anticipate}}</th>
                  <th class="ui-state-default">{{item.result}}</th>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
</template>
<script>
export default {
  props: {
    user: Object,
    flags: Array
  },
  methods: {
    addApply: function () {
      alert('hello')
    },
    removeApply: function () {
      // console.log(this.flags)
      for (var i = this.flags.length - 1; i >= 0; i--) {
        if (this.flags[i] === true) {
          this.user.apply.splice(i, 1)
          this.flags.splice(i, 1)
          // 发起请求，删除数据
        }
      }
      // console.log(this.flags)
      // alert('remove apply')
    },
    updateApply: function () {
      alert('update apply')
    },
    switchFlag: function (index) {
      // this.flags[index] = !this.flags[index]
      // console.log(index)
      this.$emit('switchFlag', index)
      // console.log(index)
      // console.log(this.flags)
    }
  }
}
</script>
<style scoped>
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

</style>
