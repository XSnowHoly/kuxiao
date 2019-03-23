/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-23 18:34:24
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
      msg: "学习"
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