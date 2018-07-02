import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'

Vue.use(Router)

// 导出一组路由配置项
export default new Router({
  routes: [
    // 用户访问根路径，访问的是helloWorld组件
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
