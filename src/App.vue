<template>
  <div id="app">
    <!-- 根据当前路由地址，展示对应的内容 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// a.vue 单文件组件
export default {
  name: 'App'
}
</script>

<style>
</style>
