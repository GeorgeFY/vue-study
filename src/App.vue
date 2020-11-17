<template>
  <div id="app">
   <!-- hello vue
    <input type="text" ref="mytext"> -->
    <!-- <button @click="handelAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{data}}
      </li>
    </ul>
    <navbar>
      <button @click="isActive = !isActive">nav-byn</button>
    </navbar>
    <sidebar v-show="isActive"></sidebar> -->

    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
/* import navbar from './components/Navbar'
import sidebar from './components/Siderbar' */
import tabbar from './views/Tabbar.vue'
// import axios from 'axios'
// import bus from '@/bus'
/* import Vue from 'Vue'
Vue.component('navbar', navbar)
Vue.component('sidebar', sidebar) */
export default {
  data () {
    return {
      /* datalist: [],
      isActive: false */
      isShow: true
    }
  },
  methods: {
    /* handelAdd () {
      console.log('add', this.$refs.mytext.value)
      this.datalist.push(this.$refs.mytext.value)
    } */
  },
  components: {
    /* navbar: navbar,
    sidebar: sidebar, */
    tabbar: tabbar
  },
  mounted () {
    /* axios.get('/ajax/movieOnInfoList?token=').then(res => {
      // console.log(res.data)
    }), */
  },
  beforeMount () {
    /* bus.$on('maizuo', (data) => {
      console.log('被通知了在app中', data)
      this.isShow = data
    }) */
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  li{
    list-style: none;
  }
</style>
