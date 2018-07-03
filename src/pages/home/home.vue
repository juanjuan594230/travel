<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import homeHeader from './component/Header.vue'
import homeSwiper from './component/Swiper.vue'
import homeIcons from './component/Icons.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>

<style>

</style>
