<template>
  <div>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="0">
      <li v-for="data in datalist" :key="data.filmId" @click="handelChangePage(data.filmId)">
        <img :src="data.poster">
        <h3>{{data.name}}</h3>
        <h5> 关注评分{{data.grade}}</h5>
        <h5> 主演：{{data.actors | actorfilter}}</h5>
      </li>
    </ul>
    <div v-show="isShow">正在加载中.....</div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'Vue'
import { Indicator } from 'mint-ui'

Vue.filter('actorfilter', function (data) {
  var newList = data.map(item => item.name)
  return newList.join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      total: 0,
      curpage: 1,
      isShow: true
    }
  },
  mounted () {
    Indicator.open('加载中...')
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=420100&pageNum=1&pageSize=10&type=1&k=7248746',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605467247432649235595265"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      console.log('nowplaying this.total..', this.total)
      Indicator.close()
    })
  },
  methods: {
    handelChangePage (id) {
      // console.log(id)
      // 编程式导航-路径跳转
      this.$router.push(`/detail/${id}`)
      // 编程式导航 -名字跳转
      // this.$router.push({ name: 'yuandetail', params: { id: id } })
    },
    loadMore () {
      console.log('到底了nowplaying')
      this.loading = true
      this.curpage++
      console.log('datalist.length ..', this.datalist.length)
      console.log('this.total ..', this.total)
      if (this.datalist.length === this.total) {
        console.log('yuan ok')
        this.isShow = false
        return
      } else {
        console.log('total is error')
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=420100&pageNum=${this.curpage}&pageSize=10&type=1&k=7248746`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605467247432649235595265"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
        // Indicator.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    li{
      padding: 10px;
      overflow: hidden;
      img{
        float: left;
        width: 100px;
      }
    }
  }
</style>
