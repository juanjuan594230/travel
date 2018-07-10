import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导出一组路由配置项
export default new Router({
  routes: [
    // 用户访问根路径，访问的是helloWorld组件
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/home.vue')
    },
    // 城市选择页面
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
