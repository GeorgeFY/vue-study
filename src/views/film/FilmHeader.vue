<template>
  <div>
    <ul>
      <div v-show="isShow">武汉</div>
      <router-link to="/film/Nowplaying" tag="li" activeClass="active">正在热映</router-link>
      <router-link to="/film/Comingsoon" tag="li" activeClass="active">马上上映</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  li{
    flex:1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background:white;
  }
}

.active{
  color:red;
  border-bottom: 2px solid red;
}

.fixed{
  position: fixed;
  left:0px;
  top:0px;
  width:100%;
  height:40px;
  background:white;
}
</style>
