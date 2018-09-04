<template>
  <div class="today-wrap">
    <!-- 首页 -->
    <div class="con-wrap">
      <h2 class="title-text-one">Today(考虑保留中)</h2>
      <!-- 顶部导航 -->
      <header class="header-top">
        <header-top :title="['search','login','menu']"></header-top>
      </header>

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
.today-wrap{
  width: 100%;
  min-height: 100vh;
  background-color: @blue-dark;  
}
</style>

