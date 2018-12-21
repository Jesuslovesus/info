<template>
  <div class="assistant-menu-wrap">
    <p>已录入{{numbers}}个少数民族</p>
    <!-- <div class="menu-list"> -->
    <el-menu>
      <el-menu-item v-for="(item,index) in listData" :index="item.id.toString()" :key="index"  @click="menuClick(item)">
        <!-- <i :class="item.icon"></i> -->
        <span>{{`${index+1}、`}}{{item.label}}</span>
        <!-- 》占人口1 -->
      </el-menu-item>
    </el-menu>
    <!-- </div> -->
  </div>
</template>

<script>
import * as types from '../../store/types'

export default {
  props: ['listData'],
  computed: {
    // ...mapGetters(['listData'])
    numbers(){
      // Object.getOwnPropertyNames(this.listData).length
      return this.listData.length
    }
  },
  name: '',
  data() {
    return {}
  },
  components: {
  },
  mounted() {
    // console.log(this.listData)
  },
  methods: {
    menuClick(value){
      document.documentElement.scrollTop = 0
      // 获取指定少数民族详细信息
      this.$store.dispatch('Get_minorityContent', value.id)
      this.$store.commit(types.APP_ASSISTANT_MENU, false)
      // 后期做两个，判断屏幕大小选择进入不同的路由页面
      this.$router.push({path: '/layout/minority',params: { id: 3},query: {id: value.id}})
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
.assistant-menu-wrap {
  height: 100%;
  overflow-x: hidden;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.1);
  box-sizing: border-box;
  padding-top: 32px;
  >p{
    margin-top: -32px;
    text-align: center;
    line-height: 32px;
    // padding-top: 6px;
  }
  .el-menu{
    background-color: transparent;
    border: none;
    height: 100%;
    // .el-menu-item:focus, .el-menu-item:hover{
      // background-color: transparent;
      // i,span{
        // color: @blue-dark;
      // }
    // }
    .el-menu-item, .el-submenu__title {
      // height: 46px;
      // line-height: 46px;
    }
    li{
      // padding-left: 20px !important;
      // i,span{
      //   color: @white;  
      //   font-size: 20px;              
      // }
    }
  }
}
</style>
