<template>
  <div>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="$store.state.comloading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="0">
      <li v-for="data in $store.state.comingSoonList" :key="data.filmId" @click="handelClick(data.filmId,data.isPresale)">
        <img :src="data.poster">
        <h3>{{data.name}}</h3>
        <h5 v-if="data.grade"> 关注评分{{data.grade}}</h5>
        <h5> 主演：{{data.actors | actorfilter}}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'Vue'
import { MessageBox } from 'mint-ui'
Vue.filter('actorfilter', function (data) {
  var newList = data.map(item => item.name)
  return newList.join(' ')
})
export default {
  data () {
    return {
    }
  },
  mounted () {
    if (this.$store.state.comingSoonList.length === 0) {
      this.$store.dispatch('getComingsoonAction')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    loadMore () {
      console.log('到底了Comingsoon')
      this.$store.commit('Trueinfinite', true)
      this.$store.dispatch('getComingsoonActionMore')
    },
    handelClick (id, isPresale) {
      if (!isPresale) {
        MessageBox({
          title: '提示',
          message: '电影还没有排期看看首页把',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            this.$router.push('/film/nowplaying')
          }
        })
      }
      this.$router.push(`/detail/${id}`)
    }
  },
  beforeDestroy () {
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
