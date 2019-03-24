/*
 * 头部组件
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 11:06:58
 */
<template>
  <div class="header-box">
    <div class="icon left">
      <slot name="left"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="icon right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
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
.header-box {
  position: relative;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid #ededed;
  .title {
    width: 50%;
    margin: 0 auto;
  }
  .icon {
    position: absolute;
    top: 8px;
    width: 24px;
    height: 24px;
    img {
      width: 100%;
    }
    &.left {
      left: 12px;
    }
    &.right {
      right: 12px;
    }
  }
}
</style>