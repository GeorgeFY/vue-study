import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import film from '../views/Film'
import cinema from '../views/Cinema'
import center from '../views/Center'
import detail from '../views/Detail'
import login from '../views/Login'
import Nowplaying from '../views/film/Nowplaying'
import Comingsoon from '../views/film/Comingsoon'
import city from '../views/city/City'
Vue.use(Router)
/* const auth = {
  isLogin () {
    return false
  }
} */
const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      component: film,
      children: [
        {
          path: 'nowplaying',
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: cinema
    },
    {
      path: '/city',
      component: city
    },
    {
      path: '/center',
      component: center
    },
    {
      path: '/detail/:id',
      name: 'yuandetail',
      component: detail
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})

// 全局守卫
/* router.beforeEach((to, from, next) => {
  if (to.path === '/center') {
    console.log('盘查')
    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}) */

export default router
