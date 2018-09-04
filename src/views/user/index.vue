<template>
  <div class="user-wrap">
    <div class="user-content">
      <!-- <router-view></router-view> -->
    </div>
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
@import '../../assets/style/color.less';
@import '../../assets/style/index.less';
.user-wrap {
  width: 100%;
  height: 100%;
  background-color: @test-1;
}
</style>