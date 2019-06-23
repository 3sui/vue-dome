<template>
  <div>
    <ul class="mui-table-view">
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://pic1.zhimg.com/e1508a4cce37c0ceb565505def884b14_is.jpg"
          >
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>-->
      <li v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img :src="item.img_url" alt="图片">
          <div class="words">
            <p class="title">{{item.title}}</p>
            <p class="title2">
              <span>发表时间: {{item.add_time | dateFormat}}</span>
              <span>点击: {{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            newsList: []
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('getnewslist').then(result => {
                if (result.body.status ===0) {
                    this.newsList = result.body.message
                } else {
                    Toast('获取新闻列表失败')
                }
            })
        }
    }
};
</script>   

<style scoped>
.mui-table-view li {
  padding: 10px;
  border-bottom: 1px solid rgb(221, 221, 221);

}
.mui-table-view li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mui-table-view li a p {
  margin: 0;
  padding: 0;
}
.mui-table-view li a img {
  width: 60px;
  vertical-align: middle;
}
.words {
  /* background: red; */
  width: 100%;
  height: 100%;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 14px;
  color: #000;
}
.title2 {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>

