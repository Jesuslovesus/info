<template>
  <div class="pray-wrap">
    <p>
      筹划中
    </p>
   
    <router-link to="/index">
      <el-button type="primary">返回首页</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  components: {},
  mounted() {}
}
</script>

<style scoped lang="less">
.pray-wrap{
  text-align: center;
  min-height: 100vh;
  p{
    padding: 20px 0;
  }
}
</style>
