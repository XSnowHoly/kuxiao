/*
 * 注册登录按钮组
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-23 18:34:52
 */
<template>
  <div class="btn-box">
    <div class="btn reg">马上注册</div>
    <div class="btn login">立即登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.btn-box {
  background: #bababa;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  .btn {
    color: #fff;
    border-radius: 6px;
    width: 35%;
    text-align: center;
    padding: 8px 0;
    &.reg {
      background: #f15b5b;
    }
    &.login {
      background: #3980ea;
    }
  }
}
</style>