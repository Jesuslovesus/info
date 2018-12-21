/**
 * 当前进入的地区、二级地区、输出的文章内容
 */
import * as types from './../types'
import func from '../../common/func'
import { getLinkData } from '@/common/fetch'
// import { bubbleSort } from '@/common/utils'
// import placeData from '../../common/data/contents/place/place'
// import { placeList } from '../../common/data/structure'
// import minorityList from '../../common/data/contents/place/minority'
// import minorityData from '../../common/data/contents/place/minorityData'


const state = {
  activePlace: {},
  placeList: [],
  placeListShow: [],
  placeListIndexShow: [],
  minorityList: [],
  minorityListAll: [],
  todayMinorityData: [],
  minorityContent: null
}

const getters = {
  placeList: state => state.placeList,
  placeListShow: state => state.placeListShow,
  placeListIndexShow: state => state.placeListIndexShow,
  todayMinorityData: state => state.todayMinorityData,
  activePlace: state => state.activePlace,
  minorityList: state => state.minorityList,
  minorityListAll: state => state.minorityListAll,
  minorityContent: state => state.minorityContent
}

const mutations = {
  // 所有省份
  [types.PLACE_LIST](state,data){
    state.placeList = data
    state.placeListShow = []
    state.placeListIndexShow = []
    data.map(item => {
      if(item.show){
        state.placeListShow.push(item)
      }
    })
    // 首页展示的少数民族（取少数民族最多的前五个省份）
    // let newArr = bubbleSort(state.placeListIndexShow,'')
    for(let i=0;i<5;i++){
      state.placeListIndexShow.push(state.placeListShow[i])
    }
  },
  // 选中的省份
  [types.ACTIVE_PLACE](state,data){
    state.activePlace = data
  },
  // 系统所有少数民族
  [types.MINORITY_LIST_ALL](state,data){
    state.minorityListAll = data
    // 今日少数民族，暂时随便取一个
    state.todayMinorityData = data[2]
  },
  // 指定省份少数民族列表（副菜单）
  [types.MINORITY_LIST](state,data){
    state.minorityList = data
  },
  // 少数民族详细信息
  [types.MINORITY_CONTENT](state,data){
    state.minorityContent = data
  }
}

const actions = {
  // 获取所有省份
  Get_Place: ({commit}) => {
    return new Promise(resolve => {
      // resolve(placeList)
      getLinkData({
        url: func.getProvincesList
      }).then(data => {
        commit(types.PLACE_LIST,data.results)
        resolve(data)
      })
    })
  },
  // 获取指定省份详细信息
  Get_activePlace: ({commit}, id) => {
    return new Promise(resolve => {
      getLinkData({
        url: `${func.getProvincesDetails}${id}`
      }).then(data => {
        commit(types.ACTIVE_PLACE,data.results)
        commit(types.MINORITY_LIST,data.results.nations)
        resolve(data.results)
      })
    })
  },
  //获取指定省份下所有民族-列表
  Get_minorityList: ({commit}, id) => {
    return new Promise(resolve => {
      getLinkData({
        url: `${func.getProvincesDetails}${id}/nations`
      }).then(data => {
        commit(types.MINORITY_CONTENT,data.results)
        resolve(data.results)
      })
    })
  },
  // 获取系统所有民族-列表 MINORITY_LIST_ALL
  Get_minorityListAll: ({commit}) => {
    return new Promise(resolve => {
      getLinkData({
        url: func.getMinorityListAll
      }).then(data => {
        commit(types.MINORITY_LIST_ALL,data.results)
        resolve(data.results)
      })
    })
  },
  // //获取指定民族信息 获取具体的内容(根据 当前的地区和点击的少数名族的Value)
  Get_minorityContent: ({commit}, id) => {
    return new Promise(resolve => {
      getLinkData({
        url: `${func.getMinorityList}${id}`
      }).then(data => {
        commit(types.MINORITY_CONTENT,data.results)
        resolve(data.results)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}