/*
 * 课程卡片
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:14:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 15:33:07
 */
<template>
  <div class="card-box">
    <div class="img-box">
      <img :src="src" alt>
    </div>
    <div class="info">
      <div class="title">{{title}}</div>
      <div class="content" v-if="content">{{content}}</div>
      <div class="content" v-else>暂无活动</div>
      <div class="cost-teacher">
        <span class="cost free" v-if="cost === 0">免费</span>
        <span class="cost" v-else>￥{{cost}}</span>
        <span class="teacher">{{name}}</span>
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
    content: {
      type: String,
      default: ""
    },
    title: {
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
.card-box {
  padding: 10px;
  display: flex;
  .img-box {
    width: 120px;
    height: 67px;
    margin-right: 10px;
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    font-size: 14px;
    overflow: hidden;
    .title {
      font-size: 16px;
      color: #7a8492;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .content {
      font-size: 14px;
      color: #aeafb6;
    }
    .cost-teacher {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .cost {
        color: #fa3c3c;
        &.free {
          color: #59df64;
        }
      }
      .teacher {
        color: #bdbdbd;
      }
    }
  }
}
</style>