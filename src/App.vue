<template>
  <div id="app">
    <!-- 根据当前路由地址，展示对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
// a.vue 单文件组件
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
