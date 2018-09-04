<template>
  <div class="minority-list-wrap">
    <!-- 下次把下边的结构封装，有必要的话 -->
    <div class="search-box">
      <div class="search-center-wrap">
        <searcher v-if="statusType" :placeholder="'请输入民族名称或拼音'" type="simple" :searchData="minorityListAll" :searchKeys="sourceKeys" @search="globalSearch"></searcher>
        <el-select @change="selectChange" size="small" v-else v-model="provinces" filterable :filter-method="handleCityFilter" 
          placeholder="请输入省份名称或拼音">
          <el-option
            v-for="item in searchProvinces"
            :key="item.name"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>   
        <el-button size="small" type="primary" @click="typeBtn" v-if="statusType">省份</el-button>
        <el-button size="small" type="success" @click="typeBtn" v-else>民族</el-button>
      </div>
    </div>
    <div class="minority-content">
      <p v-if="statusType || !provinces">{{provincesLabel}}</p>
      <p v-else>
        <el-button type="text" @click="provincesClick">
          {{provincesLabel}}
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </p>
        
      <!-- <el-menu>
        <el-menu-item v-for="(item,index) in resultData" :index="item.id.toString()" :key="index"  @click="menuClick(item)">
          
        </el-menu-item>
      </el-menu> -->
      <ul>
        <li v-for="(item,index) in resultData" :key="index" @click="menuClick(item)" >
          <i class="iconfont icon-jiaobiao-rt"></i>
          <span v-html="item.label"></span>
        </li>
      </ul>
      <!-- <div class="test"></div> -->
    </div>

    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searcher from '../../components/searcher/main'
import * as types from './../../store/types'
import { searchfiler } from '../../common/utils'


export default {
  name: '',
  computed: {
    ...mapGetters(['minorityListAll','placeListShow']),
    placeListData(){
      return this.placeListShow
    }
  },
  data() {
    const text = '已录入的少数民族'
    return {
      text,
      sourceKeys: ['label','name'],
      resultData: [],
      statusType: true,
      provinces: '',
      provincesLabel: text,
      provincesId: '',
      searchProvinces: []
    }
  },
  components: {
    searcher
  },
  mounted() {
    this.searchProvinces = JSON.parse(JSON.stringify(this.placeListData))
    // 获取所有的少数民族
    this.$store.dispatch('Get_minorityListAll').then(data =>{
      this.resultData = data
    })
  },
  methods: {
    globalSearch(val) {
      this.resultData = val.data
    },
    menuClick(value){
    // 获取指定少数民族详细信息
      this.$store.dispatch('Get_minorityContent', value.id)
      this.$store.commit(types.APP_ASSISTANT_MENU, false)
      // 后期做两个，判断屏幕大小选择进入不同的路由页面
      this.$router.push({path: '/layout/minority'})
    },
    typeBtn() {
      this.provinces = ''
      this.provincesLabel = this.text
      if(!this.statusType){
        this.$store.dispatch('Get_minorityListAll').then(data =>{
          this.resultData = data
        })
      }
      this.statusType = !this.statusType
    },
    handleCityFilter(val) {
      this.searchProvinces = searchfiler(false ,val, this.placeListData, this.sourceKeys)
    },
    selectChange(id){
      this.provincesId = id
      this.placeListData.map((item)=>{
        item.id === id ? this.provincesLabel = item.label : null
      })
      // 获取指定省份的少数民族
      this.$store.dispatch('Get_minorityList', id).then(data =>{
        this.resultData = data
      })
    },
    provincesClick(){
      this.$store.dispatch('Get_activePlace',this.provincesId).then(()=>{
        this.$router.push({path: '/layout/place'})
      })
    }
  }
}
</script>

<style scoped lang="less">
.minority-list-wrap{
  box-sizing: border-box;
  padding: 60px 12px;
  min-height: 100vh;
  .search-box{
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    // margin-top: -50px;
    .search-center-wrap{
      box-sizing: border-box;
      padding: 14px 12px 10px;      
      background-color: #ffffff;       
      width: 100%;
      height: 60px;
      max-width: 1000px;
      margin: 0 auto;
      box-shadow: 0 0 6px #cccccc;
      .searcher{
        width: 192px;
      }
      .el-button,.searcher,.el-select{
        float: left;
      }
      .el-button{
        margin-left: 12px;
      }
    }
    
  }
  ul{
    border: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li:hover{
      background-color: #ffffff;    
      // transform: scale3d(1.1,1.1,1.1); 
      font-size: 16px;
    }
    li{

      cursor: pointer;
      transition: all .5s;
      
      box-sizing: border-box;
      background-color: rgb(231,242,255);
      border: 1px solid #ffffff;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      box-sizing: border-box;
      // border: 1px #cccccc solid;
      padding: 0 !important;
      flex-basis: 20%;
      // width: 20%;
      // max-width: 25%;
      // min-width: 20%;
      text-align: center;
      position: relative;
      overflow: hidden;
      i{
        position: absolute;
        top: 0;
        right: 0;
        line-height: 10px;
        font-size: 10px;
        color: #409EFF;
      }
    }
  }
  .minority-content{
    >p{
      box-sizing: border-box;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      padding: 10px;
      .el-button{
        padding: 0;
        font-size: 18px;
      }
    }
    
  }
}

</style>
