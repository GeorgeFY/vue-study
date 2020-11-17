<template>
  <div>
    <ul>
      <li v-for="data in $store.getters.comingListGetter" :key="data.filmId" >
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
Vue.filter('actorfilter', function (data) {
  var newList = data.map(item => item.name)
  return newList.join(' ')
})
export default {
  mounted () {
    if (this.$store.state.comingSoonList.length === 0) {
      this.$store.dispatch('getComingsoonAction')
    } else {
      console.log('使用缓存数据')
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
