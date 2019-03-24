/*
 * 提示组件
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 10:32:13
 */
<template>
  <div class="tips-box">
    <img src="../../assets/kx_img_data_empty.png" alt="">
    <div class="content">{{content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
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
.tips-box {
  width: 45%;
  img {
    width: 100%;
  }
  .content {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>