/**
 * 导出store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import app from './modules/app'
import getters from './getters'
import permission from './modules/permission'
import place from './modules/place'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    permission,
    place
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()]:[]
})
