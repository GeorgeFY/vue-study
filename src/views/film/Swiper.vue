<template>
  <div class="swiper-container filmSwiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination film-swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  /* eslint-disable no-new */
  mounted () {
    new Swiper('.filmSwiper', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      // direction: 'vertical'
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        // type: 'progressbar',
        clickable: true
        // 分页器点击事件有效
      },
      // paginationClickable :true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="scss" >
  .swiper-wrapper{
    img{
      width: 100%;
    }
  }
  .film-swiper-pagination{
    text-align: right;
  }
  .swiper-pagination-bullet-active{
      background: white;
  }
</style>
