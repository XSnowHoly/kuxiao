<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
ul,
li {
  list-style-type: none;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background-color: #fbf9fe;
}
</style>
