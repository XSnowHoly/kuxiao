/*
 * @Name: 用户头部组件
 * @Author: xsnowholy 
 * @Date: 2019-03-23 18:52:30 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-23 19:27:19
 */
<template>
  <div class="header-box">
    <div class="avatar-login-box">
      <div class="avatar">
        <img src="../../assets/user_head.png">
      </div>
      <div class="left-box">
        <div class="login-reg-btn">登录/注册</div>
        <div class="mtitle">记录，同步你的学习进度</div>
      </div>
    </div>
    <ul class="menu-box">
      <li class="menu-item">
        <img src="../../assets/circle.png">
        <div class="menu-title">圈子</div>
      </li>
      <li class="menu-item">
        <img src="../../assets/my_resume.png">
        <div class="menu-title">简历</div>
      </li>
      <li class="menu-item">
        <img src="../../assets/drop_box.png">
        <div class="menu-title">求职</div>
      </li>
      <li class="menu-item">
        <img src="../../assets/find_job.png">
        <div class="menu-title">找工作</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [{
        src: "../../assets/circle.png",
        title: "圈子"
      },{
        src: "../../assets/circle.png",
        title: "简历"
      },{
        src: "../../assets/circle.png",
        title: "求职"
      },{
        src: "../../assets/circle.png",
        title: "找工作"
      }]
    };
  },

  components: {}
};
</script>
<style lang='less' scoped>
.header-box {
  background: #fff;
  padding: 0 10px;
  .avatar-login-box {
    display: flex;
    align-items: center;
    padding: 10px 0 20px 0;
    .avatar {
      width: 70px;
      height: 70px;
      margin-right: 15px;
      img {
        width: 100%;
      }
    }
    .left-box {
      .login-reg-btn {
        font-size: 18px;
      }
      .mtitle {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .menu-box {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f0f0f0;
    padding-top: 6px;
    .menu-item {
      padding: 8px 10px;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>