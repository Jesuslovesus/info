<template>
  <div class="header-wrap">
    

    <!-- <div class="screen-full-icon" v-if="screenfull">
      <screenfull></screenfull>
    </div> -->
    <div class="menu-btn" v-if="title.includes('menu')">
      <!-- <ul @click="menuClick('menu')">
        <li :style="{'background-color': menuBtnColor}"></li>
        <li :style="{'background-color': menuBtnColor}"></li>
        <li :style="{'background-color': menuBtnColor}"></li>
      </ul> -->
      <i class="el-icon-more menu" :style="{'color': menuBtnColor}" @click="menuClick('menu')"></i>
    </div>

    <div class="menu-btn" v-if="title.includes('search')">
      <i class="el-icon-search" @click="menuClick('search')"></i>
    </div>

    <div class="login-btn" v-if="title.includes('login')">
      <i class="iconfont icon-yonghu" @click="loginClick"></i>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import screenfull from '../screenfull/index'
import { APP_MENU_STATE, APP_LOGIN_BOX } from '../../store/types'
export default {
  props: {
    // screenfull: {
    //   type: Boolean,
    //   default: false
    // },
    title: {
      type: Array,
      default: ['menu']
    },
    login: {
      type: Boolean,
      default: false
    }
  },
  name: '',
  computed: {
    ...mapGetters(['menuBtnColor'])
  },
  data() {
    return {}
  },
  components: {
    // screenfull
  },
  mounted() {},
  methods: {
    menuClick(value){
      if(value === 'menu'){
        this.$store.commit(APP_MENU_STATE, true)
      }else{
        this.$router.push({path: '/layout/minoritys'})
      }
    },
    loginClick(){
      this.$store.commit(APP_LOGIN_BOX, true)
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
.header-wrap {
  width: 100%;
  height: 100%;
  div{
    float: right;
    box-sizing: content-box;
    i{
      cursor: pointer;
    }
  }
  .login-btn{
    padding: 21px 21px 0 0;
    i{
      color: #ffffff;
      font-size: 30px;
    }
    
  }
  .screen-full-icon {
    float: right;
    height: 30px;
    width: 30px;
    color: @white;
    overflow: hidden;
  }
  .menu-btn{
    // width: 23px;
    // height: 18px;
    overflow: hidden;
    float: right;
    padding: 21px 21px 0 0;
    i{
      color: #ffffff;
      font-size: 30px;
    }
    // ul{
    //   width: 23px;
    //   height: 18px;
    //   padding: 4px;
    //   li{
    //     width: 100%;
    //     height: 2px;
    //     background-color: @white;
    //     margin-bottom: 6px;
    //     box-shadow: 0 2px 5px rgba(0,0,0,.1);
    //   }
    // }
  }
}
</style>
