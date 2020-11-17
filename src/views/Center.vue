<template>
  <div>
    Center
  </div>
</template>

<script>
const auth = {
  isLogin () {
    return true
  }
}
export default {
  beforeRouteEnter (to, from, next) {
    console.log('局部盘查')
    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style>
</style>
