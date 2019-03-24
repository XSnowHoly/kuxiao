/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 11:32:50
 */
<template>
  <view-box>
    <my-header title="全部">
      <template slot="left">
        <img src="../../assets/customer_service_normal.png" alt="">
      </template>
      <template slot="right">
        <img src="../../assets/ic_add_more.png" alt="">
      </template>
    </my-header>
    <message-search class="search"></message-search>
    <reg-or-login class="footer-btn"></reg-or-login>
    <card-item></card-item>
  </view-box>
</template>

<script>
import { ViewBox } from "vux";
import RegOrLogin from '@/components/public/RegOrLogin'
import MyHeader from '@/components/public/Header'
import MessageSearch from '@/components/public/MessageSearch'
import CardItem from '@/components/public/CardItem'
export default {
  data () {
    return {
      msg: "消息"
    };
  },

  components: {
    RegOrLogin,
    ViewBox,
    MyHeader,
    MessageSearch,
    CardItem
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='less' scoped>
.search {
  margin: 10px 10px 0 10px;
}
.footer-btn {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>