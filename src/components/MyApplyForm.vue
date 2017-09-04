<template>
  <div>
    <!--<div class="form-close"><i class="fa fa-times-circle" aria-hidden="true"></i></div>-->
    <form class="apply-form">
      <div class="form-group">
        <label for="company">公司<i class="fa fa-asterisk" aria-hidden="true"></i></label>
        <input type="text" :value="company" class="form-control" id="company" placeholder="比如，阿里">
      </div>
      <div class="form-group">
        <label for="apply_date">申请日期<i class="fa fa-asterisk" aria-hidden="true"></i></label>
        <input type="date" :value="applyDate" class="form-control" id="apply_date" placeholder="比如，2017-09-04">
      </div>
      <div class="form-group">
        <label for="end_date">结束日期（可选）</label>
        <input type="date" :value="endDate" class="form-control" id="end_date" placeholder="比如，2017-09-04">
      </div>
      <div class="form-group">
        <label for="status">当前状态<i class="fa fa-asterisk" aria-hidden="true"></i></label>
        <input type="text" :value="status"  class="form-control" id="status" placeholder="比如，HR面结束">
      </div>
      <div class="form-group">
        <label for="recommend">内推信息（可选）</label>
        <input type="text" :value="recommend" class="form-control" id="recommend" placeholder="比如，有内推，内推人XXX">
      </div>
      <div class="form-group">
        <label for="anticipate">面试表现（可选）</label>
        <input type="text" :value="anticipate" class="form-control" id="anticipate" placeholder="给自己的面试表现打个分吧(10分为满分），比如，9分">
      </div>
      <div class="form-group">
        <label for="result">结果（可选）</label>
        <input type="text" :value="result" class="form-control" id="result" placeholder="比如，拿到offer">
      </div>
      <button type="submit" class="btn btn-default" @click="submitApply">提交</button>
      <button class="btn btn-default" @click="closeForm">取消</button>
    </form>
  </div>
  
</template>
<script>
export default {
  props: {
    user: Object,
    flags: Array,
    selected: Number
  },
  data () {
    var company, applyDate, endDate, status, recommend, anticipate, result
    if (this.selected !== null) {
      company = this.user.apply[this.selected].company
      applyDate = this.user.apply[this.selected].apply_date
      endDate = this.user.apply[this.selected].end_date
      status = this.user.apply[this.selected].status
      recommend = this.user.apply[this.selected].recommend
      anticipate = this.user.apply[this.selected].anticipate
      result = this.user.apply[this.selected].result
    }
    return {
      company: company,
      applyDate: applyDate,
      endDate: endDate,
      status: status,
      recommend: recommend,
      anticipate: anticipate,
      result: result
    }
  },
  methods: {
    closeForm: function () {
      this.$emit('closeForm')
    },
    submitApply: function () {
      this.$emit('submitApply')
    }
  }
}
</script>
<style scoped>
  .apply-form {
    width: 50%;
    /*float: right;*/
    margin: 0 auto;
    padding: 5%;
    border: 1px solid black;
    border-radius: 3%;
  }
</style>
