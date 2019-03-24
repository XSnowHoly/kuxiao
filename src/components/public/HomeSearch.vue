/*
 * 主页搜索组件
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 21:10:41
 */
<template>
  <div class="search-box" :class="{active: active}">
    <div class="icon-box">
      <img src="../../assets/icon_search.png" alt="">
      <span>搜索老师或课程名称</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
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
.search-box {
  // background: #e0e1e6;
  padding: 10px;
  display: flex;
  justify-content: center;
  &.active {
    background: #fff;
    box-shadow: 0px 1px 7px 0px #eee;
  }
  .icon-box {
    display: flex;
    width: 100%;
    align-items: center;
    background: #ebecf1;
    border-radius: 18px;
    color: #a0a0a1;
    padding: 4px 10px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}
</style>