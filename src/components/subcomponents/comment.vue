<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea name id cols="30" rows="5" placeholder="请输入内容,最多123字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list" v-for="(item, i) in comments" :key="item.add_time">
      <div class="cmt-item">
        <div class="cmt-title">第{{i +1 }}楼 用户:{{item.user_name}} 发表之间:{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content === "undefined"?"此用户很烂": item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1,
      comments: []
    };
  },
  props: ["id"],
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("加载评论失败");
          }
        });
    },
    getMore() {
      this.pageIndex += 1;
      this.getComments();
    }
  }
};
</script>   

<style scoped>
.cmt-container h3 {
  font-size: 18px;
}
.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin-bottom: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-list .cmt-item .cmt-title {
  background-color: #ccc;
  font-size: 12px;
  line-height: 30px;
  padding-left: 5px;
}
.cmt-list .cmt-item .cmt-body {
  text-indent: 2em;
  line-height: 30px;
  font-size: 16px;
}
</style>

