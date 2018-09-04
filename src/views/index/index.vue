<template>
  <div class="place-wrap">
    <!-- 首页 -->
    <div class="con-wrap">
      <h2 class="title-text-one">Place</h2>
      <!-- 顶部导航 -->
      <header class="header-top">
        <header-top :title="['search','login']"></header-top>
      </header>
      <!-- 展示选中省份的轮播（indexShow字段） -->
      <div class="carousel-wrap flex-vertical-center">
        <!-- :height="`${innerSize.height/10*6}px`" -->
        <el-carousel :interval="5000" type="card" height="400px" arrow="always" :autoplay="true">
          <el-carousel-item v-for="(item, index) in place" :key="index">
            <div class="con-box"  @click="placeClick(item)">
              <div :style="{'background-image': `url(${bgImg(item.value)})`}" class="img-box">
              </div>
              <p>{{item.label}}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 今日推荐的民族 -->
    </div>
  </div>
</template>

<script>
/**
 * 提高首页加载速度，此页面跟layout同级，打开网站后直接进入此页面
 */
  import { mapGetters } from 'vuex'
  import { HeaderTop, IndexMenu } from '../../components/components'
  export default {
    name: '',
    computed: {
      ...mapGetters(['placeListShow','innerSize']),
      place(){
        return this.placeListShow
      }
    },
    data() {
      return {
        bg: ''
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.init()
      })
    },
    components: {
      HeaderTop,
      IndexMenu
    },
    methods: {
      init(){
        this.$store.dispatch('Get_Place')
      },
      bgImg(value){
        try {
          return require(`./../../assets/img/index/${value}.jpeg`)
        } catch (error) {
          // eslint-disable-next-line
          return require(`./../../assets/img/index/yunnan.jpeg`)
        }
      },
      placeClick(list){
        if(list.show){
          this.$store.dispatch('Get_activePlace',list.id).then(()=>{
            this.$router.push({path: '/layout/place'})
          })
          return
        }
        this.$message({
          showClose: true,
          message: '正在录入',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
.place-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: @blue-dark;
  .con-wrap {
    z-index: 9;    
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .header-top{
    width: 160px;
  }
  .carousel-wrap{
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
    // height: 100%;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    .el-carousel{
      margin-top: 100px;
      width: 100%;
    }
    // .el-carousel__item--card{
    //   width: 80%;
    // }
    .el-carousel__item {
      overflow: inherit;
    }
    .con-box{
      box-shadow: 0px 0 6px rgba(0,21,41,.35);      
      margin-left: -25%;
      width: 150%;
      height: 100%;
      background-color: antiquewhite;
      .img-box{
        width: 100%;
        height: 330px;
        overflow: hidden;
        text-align: center;
        background-size: 200% 100%; 
        background-repeat: no-repeat; 
        background-position: 25% 0;
      }
      p{
        font-size: 22px;
        text-align: center;
        background: @white;
        padding: 24px 0;
      }
    }
  }
}
</style>

