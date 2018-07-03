// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
// 使用fastclick
fastclick.attach(document.body)

/* eslint-disable no-new */
// 创建根实例的，使用router[路由配置]
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
