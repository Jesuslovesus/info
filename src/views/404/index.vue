<template>
  <div class="no-found-wrap">
    <h2>页面未找到或正在开发中...</h2>
    <router-link to="/index">
      <el-button type="primary">返回首页</el-button>
    </router-link>
  </div>
  
</template>

<script>
</script>

<style scoped lang="less">
// @import '../../../assets/style/color.less';
.no-found-wrap{
  text-align: center;
}
h2{
  padding: 20px 6px;
}
</style>
