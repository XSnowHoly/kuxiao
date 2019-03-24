/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 13:31:36
 */
<template>
  <view-box ref="viewBox" body-padding-top="0" body-padding-bottom="50px">
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="/index/">
        <img slot="icon-active" src="../../assets/main_aty_home__bluepress.png">
        <img slot="icon" src="../../assets/main_aty_home_nor.png">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item link="/index/study">
        <img slot="icon-active" src="../../assets/main_aty_my_study_press.png">
        <img slot="icon" src="../../assets/main_aty_my_study_normal.png">
        <span slot="label">学习</span>
      </tabbar-item>
      <tabbar-item link="/index/message">
        <img slot="icon-active" src="../../assets/main_aty_im_press.png">
        <img slot="icon" src="../../assets/main_aty_im_nor.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/index/user">
        <img slot="icon-active" src="../../assets/tab_myself_index_down.png">
        <img slot="icon" src="../../assets/tab_myself_index_normal.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox } from "vux";
export default {
  data() {
    return {
      msg: "主页"
    };
  },

  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },

  computed: {},

  // mounted: {},

  methods: {}
};
</script>
<style lang='less'>
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>