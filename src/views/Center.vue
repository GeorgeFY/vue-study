<template>
  <div>
    Center
    <el-button type="danger" disabled :loading="true">按钮</el-button>
    <br />
    <br />
    <br />
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <br />
    <br />
    <el-radio v-model="radio" label='1'>vue</el-radio>
    <el-radio v-model="radio" label='2'>reject</el-radio>
    <br />
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <br />
    <el-time-select
      v-model="valueTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select>
    <br />
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="valueSlect1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="valueSlect2"
        :colors="colors">
      </el-rate>
    </div>
    <el-calendar v-model="calendar">
    </el-calendar>
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
  },
  data () {
    return {
      radio: '1',
      value: true,
      valueTime: '',
      valueSlect1: null,
      valueSlect2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      calendar: new Date()
    }
  }
}
</script>

<style>
</style>
