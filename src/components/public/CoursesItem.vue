/*
 * 可滚动推荐课程Item
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 20:05:17
 */
<template>
  <div class="item-box">
    <div class="img-box">
      <img :src="src" alt="">
    </div>
    <div class="info">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="cost-name">
        <span v-if="cost === 0" class="cost free">免费</span>
        <span v-else class="cost">￥{{cost}}</span>
        <span class="name">{{name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    cost: {
      type: Number
    },
    name: {
      type: String,
      default: ""
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
.item-box {
  width: 140px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  .img-box {
    height: 90px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    padding: 10px 6px;
    .title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .content {
      font-size: 14px;
      color: #979797;
    }
    .cost-name {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #ccc;
      .cost {
        color: #ff3737;
        &.free {
          color: #36e653;
        }
      }
    }
  }
}
</style>