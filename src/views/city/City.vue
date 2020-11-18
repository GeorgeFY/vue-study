<template>
  <div>
    <mt-index-list ref="myclass">
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div v-for="city in data.list" :key="city.cityId" @click="handelClick(city.cityId,city.name)">
          <mt-cell :title="city.name" ></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    console.log(this.$refs.myclass.$el)
    this.$refs.myclass.$el.style.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?k=8434651',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605467247432649235595265","bc":"420100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }

    }).then(res => {
      // console.log(res.data.data.cities)
      this.datalist = this.handelCity(res.data.data.cities)
    })
  },
  methods: {
    handelCity (data) {
      var letterArr = []
      for (var i = 65; i <= 90; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)
      var newList = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = data.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      // console.log(newList)
      return newList
    },
    handelClick (id, name) {
      console.log(id, name)
      localStorage.setItem('cityId', id)
      localStorage.setItem('cityName', name)
      this.$router.push('/cinema')
    }
  }
}
</script>

<style>
</style>
