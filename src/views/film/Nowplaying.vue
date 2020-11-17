<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handelChangePage(data.filmId)">
        <img :src="data.poster">
        <h3>{{data.name}}</h3>
        <h5> 关注评分{{data.grade}}</h5>
        <h5> 主演：{{data.actors | actorfilter}}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'Vue'
Vue.filter('actorfilter', function (data) {
  var newList = data.map(item => item.name)
  return newList.join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2580771',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605467247432649235595265"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handelChangePage (id) {
      console.log(id)
      // 编程式导航-路径跳转
      this.$router.push(`/detail/${id}`)
      // 编程式导航 -名字跳转
      // this.$router.push({ name: 'yuandetail', params: { id: id } })
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
