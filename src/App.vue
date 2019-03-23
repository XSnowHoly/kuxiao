<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
ul,li {
  list-style-type: none;
}
body {
  background-color: #fbf9fe;
}
</style>
