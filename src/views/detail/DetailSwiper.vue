<template>
  <div class="swiper-container filmSwiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  /* eslint-disable no-new */
  props: ['perview', 'myclass'],
  mounted () {
    new Swiper('.' + this.myclass, {
      slidesPerView: this.perview,
      spaceBetween: this.myclass === 'photoSwiper' ? 10 : 5,
      freeMode: true
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

</style>
