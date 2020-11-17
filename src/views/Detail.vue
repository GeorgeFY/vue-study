<template>
  <div v-if="filminfo">
    <div class="picDiv">
      <img :src="filminfo.poster" class="poster target-img"/>
    </div>
    <h2>{{filminfo.name}}</h2>
    <h3>演职人员：</h3>
    <swiper perview="4" class="actorSwiper" myclass = "actorSwiper">
      <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
        <div class="actorPic">
          <img :src="data.avatarAddress">
        </div>
        <p style="text-align: center;">{{data.name}}</p>
        <h6 style="text-align: center;">{{data.role}}</h6>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper perview="3" class="photoSwiper" myclass = "photoSwiper">
      <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
        <div class="photoPic">
          <img :src="data">
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
import swiper from './detail/DetailSwiper'
// import bus from '@/bus'
export default {
  beforeMount () {
    console.log('hidetabbar yuan')
    // bus.$emit('maizuo', false)
    // this.$store.state.isTabbarShow = false
    this.$store.commit('HideMaizuoTabbar', false) // 第一个参数就是mutation的名字
  },
  data () {
    return {
      filminfo: null
    }
  },
  mounted () {
    console.log('要id获取详情信息', this.$route.params.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=9567013`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605514300459406881849345","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },
  components: {
    swiper
  },
  beforeDestroy () {
    console.log('showtabbar yuan')
    // bus.$emit('maizuo', true)
    // this.$store.state.isTabbarShow = true
    this.$store.commit('ShowMaizuoTabbar', true)
  }
}
</script>

<style lang="scss" scoped>
.picDiv{
  height: 200px;
  width: 100%;
  overflow: hidden;
}
.poster{
  width:100%;
}
.actorSwiper{
  margin-bottom: 10px;
}
.actorPic{
  height: 147px;
  overflow: hidden;
  margin-bottom: 5px;
}
.photoPic{
  height: 85px;
  overflow: hidden;
}
.photoPic img{
  height: 100%;
}
</style>
