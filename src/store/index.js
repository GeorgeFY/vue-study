import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarShow: true,
    comingSoonList: []
  },
  getters: {
    comingListGetter (state) {
      return state.comingSoonList.filter((item, index) => index < 5)
    }
  },
  mutations: { // 唯一修改状态的地方
    HideMaizuoTabbar (state, data) {
      console.log('HideMaizuoTabbar')
      state.isTabbarShow = data
    },
    ShowMaizuoTabbar (state, data) {
      console.log('ShowMaizuoTabbar')
      state.isTabbarShow = data
    },
    ComingSoonMutation (state, data) {
      state.comingSoonList = data
      console.log(data)
    }
  },
  actions: {
    getComingsoonAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=420100&pageNum=1&pageSize=10&type=2&k=7252875',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605467247432649235595265"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data)
        // 提交到ComingSoonMutation中
        store.commit('ComingSoonMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
