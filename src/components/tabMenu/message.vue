/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-23 18:36:04
 */
<template>
  <view-box>

    <reg-or-login class="footer-btn"></reg-or-login>
  </view-box>
</template>

<script>
import { ViewBox } from "vux";
import RegOrLogin from '@/components/public/RegOrLogin'
export default {
  data () {
    return {
      msg: "消息"
    };
  },

  components: {
    RegOrLogin,
    ViewBox
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='less' scoped>
.footer-btn {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>