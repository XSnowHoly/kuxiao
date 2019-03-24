/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-24 21:08:12
 */
<template>
  <view-box body-padding-bottom="0px" ref="viewBox">
    <home-search class="search" :active="SearchActive"></home-search>
    <swiper :aspect-ratio="360/640" auto :duration="500" :interval="6000" loop>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in carouselList" :key="index">
        <img style="width:100%;" :src="item.img">
      </swiper-item>
    </swiper>
    <div class="menu-box">
      <div class="menu-item" v-for="(item, index) in menuList" :key="index">
        <img :src="item.icon" alt>
        <div class="menu-title">{{item.name}}</div>
      </div>
    </div>
    <div class="banner">
      <img src="../../assets/img_main_block_ad.png" alt>
    </div>
    <div class="main-container">
      <div class="title-box">
        <span>跨境电商</span>
      </div>
      <div class="main-content" v-if="coursesList">
        <div class="courses-box">
          <courses-item class="courses-item"
            v-for="(item, index) in coursesList"
            :key="index"
            :src="item.info.cinfo.imgs[0]"
            :title="item.info.activity[0].desc? item.info.activity[0].desc: ''"
            :content="item.info.activity[0].title"
            :cost="item.info.cinfo.maxPrice"
            :name="item.info.uinfo.attrs.basic.nickName"
          ></courses-item>
        </div>
      </div>
    </div>
    <div class="banner" style="margin-top:10px;">
      <img src="../../assets/img_main_block_ad.png" alt>
    </div>
    <div class="main-container">
      <div class="title-box">
        <span>IT互联网</span>
      </div>
      <div class="main-content" v-if="itList">
        <curriculum-item
          v-for="(item, index) in itList"
          :key="index"
          :src="item.info.cinfo.imgs[0]"
          :title="item.info.cinfo.title"
          :content="item.info.activity && item.info.activity[0] ? item.info.activity[0].title: ''"
          :cost="item.info.cinfo.maxPrice"
          :name="item.info.uinfo.attrs.basic? item.info.uinfo.attrs.basic.nickName: ''"
        ></curriculum-item>
      </div>
    </div>
    <div class="main-container">
      <div class="title-box">
        <span>外语学习</span>
      </div>
      <div class="main-content" v-if="language">
        <curriculum-item
          v-for="(item, index) in language"
          :key="index"
          :src="item.info.cinfo.imgs[0]"
          :title="item.info.cinfo.title"
          :content="item.info.activity && item.info.activity[0] ? item.info.activity[0].title: ''"
          :cost="item.info.cinfo.maxPrice"
          :name="item.info.uinfo.attrs.basic? item.info.uinfo.attrs.basic.nickName: ''"
        ></curriculum-item>
      </div>
    </div>
  </view-box>
</template>

<script>
import { ViewBox, Swiper, SwiperItem } from "vux";
import CurriculumItem from "@/components/public/CurriculumItem";
import CoursesItem from "@/components/public/CoursesItem";
import HomeSearch from "@/components/public/HomeSearch";
export default {
  data() {
    return {
      msg: "主页",
      carouselList: [],
      menuList: [],
      itList: null,
      language: null,
      coursesList: null,
      SearchActive: false
    };
  },

  components: {
    Swiper,
    SwiperItem,
    CurriculumItem,
    ViewBox,
    CoursesItem,
    HomeSearch
  },

  computed: {},

  mounted() {
    window.addEventListener("scroll", this.getScrollTop, true); // 监听（绑定）滚轮滚动事件
    this.$http
      .get(
        "/pub/api/loadPage?format=1&keys=p_course,p_carousel,p_classifi&host=www.kuxiao.cn&pageCount=30&source=ANDROID&page=1"
      )
      .then(res => {
        console.log("请求成功", res.data);
        this.carouselList = res.data.data.items.p_carousel.data.items;
        this.menuList = res.data.data.items.p_classifi.data.root.childs;
        this.itList = res.data.data.items.p_course.data.courses[6].items;
        this.language = res.data.data.items.p_course.data.courses[8].items;
        this.coursesList = res.data.data.items.p_course.data.courses[2].items;
        console.log("itlist", this.itList);
        console.log("打印轮播数据列表", this.carouselList);
      });
  },

  beforeDestroy() {
    console.log("页面准备销毁");
    window.addEventListener("scroll", this.getScrollTop, true);
    window.removeEventListener("scroll", this.getScrollTop, true); //  离开页面清除（移除）滚轮滚动事件
  },

  methods: {
    getScrollTop() {
      console.log("滚动距离", this.$refs.viewBox.getScrollTop());
      let height = this.$refs.viewBox.getScrollTop();
      if(height > 100) {
        this.SearchActive = true
      } else {
        this.SearchActive = false
      }
    }
  }
};
</script>
<style lang='less' scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.menu-box {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  .menu-item {
    text-align: center;
    font-size: 12px;
    color: #999;
    img {
      width: 40px;
    }
  }
}

.banner {
  padding: 16px 15px;
  background: #fff;
  img {
    width: 100%;
  }
}

.main-container {
  background: #fff;
  margin-top: 10px;
  .title-box {
    padding: 10px;
  }
}

.courses-box {
  display: flex;
  padding: 10px;
  overflow-x: scroll;
  flex-wrap: nowrap;
  .courses-item {
    flex-shrink: 0;
    margin-right: 10px;
  }
}
</style>