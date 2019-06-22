<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 中间路由 router-view  -->

    <!-- 底部 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="">
        消息
      </mt-tab-item>
      <mt-tab-item id="通讯录">
        <img slot="icon" src="">
        通讯录
      </mt-tab-item>
      <mt-tab-item id="设置">
        <img slot="icon" src="">
        设置
      </mt-tab-item>
    </mt-tabbar>
    <h1>这是 APP 组件</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container {
  padding-top: 80px;
  color: red;
}
h1 {
  padding: 0;
  margin: 0;
}
</style>
