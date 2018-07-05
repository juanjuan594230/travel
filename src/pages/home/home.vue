<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import homeHeader from './component/Header.vue'
import homeSwiper from './component/Swiper.vue'
import homeIcons from './component/Icons.vue'
import homeRecommend from './component/Recommend.vue'
import homeWeekend from './component/Weekend.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  }
}
</script>

<style>

</style>
