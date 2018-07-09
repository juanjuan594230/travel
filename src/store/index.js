import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// vuex是一个vue插件，插件要使用vue.use(vuex)来使用
vue.use(vuex)
export default new vuex.Store({
  state,
  mutations
})
