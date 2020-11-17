<template>
  <div>
    <swiper ref="myswiper" class="swiper-pic">
      <div class="swiper-slide">
        <img src="../../public/image/1.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../public/image/2.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../public/image/3.jpg">
      </div>
    </swiper>
    <filmheader :class="isFixed?'fixed':''" ref="myfilmheader"></filmheader>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from '@/views/film/Swiper'
import filmheader from '@/views/film/FilmHeader.vue'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    swiper,
    filmheader
  },
  mounted () {
    window.onscroll = this.handeScroll
    // console.log('guazai')
  },
  methods: {
    handeScroll () {
      console.log(this.$refs.myfilmheader._data.isShow)
      // console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)
      if (document.documentElement.scrollTop > this.$refs.myswiper.$el.offsetHeight) {
        // console.log('fixed')
        this.isFixed = true
        this.$refs.myfilmheader._data.isShow = true
      } else {
        // console.log('unfixed')
        this.isFixed = false
        this.$refs.myfilmheader._data.isShow = false
      }
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>

<style lang="scss" scoped>
  .swiper-pic{
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
</style>
