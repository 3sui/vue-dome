<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotList" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList" href="#">
          <img src="../../img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu2.png" alt="">
          
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu4.png" alt="">
          
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu5.png" alt="">
          
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu6.png" alt="">
          
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotList: []
    };
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("getlunbo")
        .then(result => {
          // console.log(result.body)
          if (result.body.status === 0) {
            this.lunbotList = result.body.message;
          } else {
            toast("加载轮播图失败...");
          }
        });
    }
  },
  created() {
    this.getLunbotu();
  }
};
</script>   
<style scoped>
.mint-swipe {
  height: 175px;
}

img {
  height: 100%;
  width: 100%;
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
}

.mui-grid-view.mui-grid-9 img {
    width: 60px;
}

.mui-media-body {
    font-size: 13px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}
</style>

