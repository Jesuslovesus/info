<template>
  <div class="about-wrap">
    <div class="con-wrap-text">
      <div class="con-list-box">
        <h3>About</h3>
        <div v-for="(list,index) in aboutPageData" :key="index">
          <h4 class="intro-title">{{list.title}}</h4>
          <p class="intro-one">{{list.content}}</p>
        </div>
      </div>
    </div>
    <!-- 测试表盘 -->
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../../store/types'
// import eCharts from 'echarts'

export default {
  name: '',
  computed: {
    ...mapGetters(['aboutPageData'])
  },
  data() {
    return{
    }
  },
  mounted() {
    this.$store.commit(types.APP_MENU_BTN_COLOR,'#303133')
  },
  components: {
  },
  methods: {
  },
  destroyed(){
    this.$store.commit(types.APP_MENU_BTN_COLOR,'#DCDFE6')
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
.about-wrap {
  // position: absolute;
  // left: 0;
  // top: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: @white;
}
</style>
