import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarShow: true,
    comingSoonList: [],
    comingSoonTotle: 0,
    comSoonPage: 1,
    comloading: false
  },
  getters: {
    /* comingListGetter (state) {
      return state.comingSoonList.filter((item, index) => index < 20)
    } */
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
    Trueinfinite (state, data) {
      console.log('Trueinfinite')
      state.comloading = data
    },
    Falseinfinite (state, data) {
      console.log('Trueinfinite')
      state.comloading = data
    },
    ComingSoonMutation (state, obj) {
      state.comingSoonList = [...state.comingSoonList, ...obj.data]
      state.comingSoonTotle = obj.total
      console.log('comingSoonList', state.comingSoonList)
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
        store.commit('ComingSoonMutation', {
          data: res.data.data.films,
          total: res.data.data.total
        })
      })
    },
    getComingsoonActionMore (store) {
      store.state.comSoonPage++
      console.log('长度yuan')
      console.log('yuan', store.state.comingSoonList.length)
      console.log('yuan', store.state.comingSoonTotle)
      if (store.state.comingSoonList.length === store.state.comingSoonTotle) {
        console.log('长度已经相等 不在axios')
        return
      }
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=420100&pageNum=2&pageSize=10&type=2&k=7252875',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605467247432649235595265"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data)
        // 提交到ComingSoonMutation中
        store.commit('ComingSoonMutation', {
          data: res.data.data.films,
          total: res.data.data.total
        })
        store.commit('Falseinfinite', false)
      })
    }
  },
  modules: {
  }
})
