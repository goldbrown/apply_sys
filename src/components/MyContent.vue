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
                 <th class="ui-state-default sorting">公司 <i class="fa fa-sort" aria-hidden="true"></i></th>
                 <th class="ui-state-default sorting">公司招聘官网</th>
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
                  <th class="ui-state-default">{{item.companyName}}</th>
                  <th class="ui-state-default"><a :href="'' + item.website">{{item.website}}</a></th>
                  <th class="ui-state-default">{{item.applyDate}}</th>
                  <th class="ui-state-default">{{item.status}}</th>
                  <th class="ui-state-default">{{item.endDate}}</th>
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
      this.$emit('addApply')
    },
    removeApply: function () {
      this.$emit('removeApply')
    },
    updateApply: function () {
      this.$emit('updateApply')
    },
    switchFlag: function (index) {
      this.$emit('switchFlag', index)
    }
  }
}
</script>
<style scoped>
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

</style>
