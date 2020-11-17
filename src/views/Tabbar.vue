<template>
  <nav>
    <!-- 声明式导航-->
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
        <i class="iconfont icon-favorite"></i>
        Film
       </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="iconfont icon-favorite"></i>
        Cinema
      </router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
        <i class="iconfont icon-favorite"></i>
        Center
      </router-link>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss" scoped>
  .myactive{
    background-color: red;
  }
  nav{
    position: fixed;
    bottom: 0px;
    height: 50;
    width: 100%;
    background: white;
    ul{
      display: flex;
      li{
        flex: 1;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
