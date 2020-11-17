<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=420100&ticketFlag=1&k=5987517',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605514300459406881849345","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.cinemas
      this.$nextTick(() => {
        this.scroll = new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  li{
    height: 50px;
  }
  .cinema{
    height: 300px;
    overflow: hidden;
    position: relative;
  }
</style>
