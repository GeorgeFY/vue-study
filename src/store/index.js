import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarShow: true
  },
  mutations: { // 唯一修改状态的地方
    HideMaizuoTabbar (state, data) {
      console.log('HideMaizuoTabbar')
      state.isTabbarShow = data
    },
    ShowMaizuoTabbar (state, data) {
      console.log('ShowMaizuoTabbar')
      state.isTabbarShow = data
    }
  },
  actions: {
  },
  modules: {
  }
})
