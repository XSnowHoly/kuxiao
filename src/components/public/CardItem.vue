/*
 * 卡片item
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 11:34:58
 */
<template>
  <div class="card-box">
    <div class="avatar-box">
      <img src="../../assets/icon_book.png" alt="">
    </div>
    <div class="content">客服刘老师</div>
    <div class="time">昨天</div>
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
.card-box {
  padding: 8px 10px;
  display: flex;
  border-bottom: 1px solid #ececec;
  .avatar-box {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    img {
      width: 100%;
    }
  }
  .content {
    flex-grow: 1;
    font-size: 16px;
  }
  .time {
    font-size: 12px;
    color: #a8a8a8;
  }
}
</style>