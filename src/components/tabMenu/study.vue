/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 10:58:59
 */
<template>
  <view-box class="study-body">
    <my-header title="学习">
      <template slot="right" class="icon-search">
        <img src="../../assets/icon_search.png" alt="">
      </template>
    </my-header>
    <tips class="my-tips" content="请先登录"></tips>
    <reg-or-login class="footer-btn"></reg-or-login>
  </view-box>
</template>

<script>
import { ViewBox } from "vux";
import RegOrLogin from '@/components/public/RegOrLogin'
import Tips from '@/components/public/Tips'
import MyHeader from '@/components/public/Header'
export default {
  data () {
    return {
      msg: "学习"
    };
  },

  components: {
    RegOrLogin,
    ViewBox,
    Tips,
    MyHeader
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='less' scoped>
.my-tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.footer-btn {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>