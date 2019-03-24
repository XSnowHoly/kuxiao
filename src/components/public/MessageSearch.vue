/*
 * 消息搜索组件
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 11:25:20
 */
<template>
  <div class="search-box">
    <div class="icon-box">
      <img src="../../assets/icon_search.png" alt="">
      <span>搜索</span>
    </div>
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
.search-box {
  border-radius: 6px;
  background: #e0e1e6;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  .icon-box {
    display: flex;
    align-items: center;
    color: #a0a0a1;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}
</style>