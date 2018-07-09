<template>
  <div>
    <home-header></home-header>
    <home-swiper v-bind:swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data: function () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const data = res.data
      if (data.ret) {
        const _data = data.data
        if (_data.swiperList.length) {
          this.swiperList = _data.swiperList
        }
        if (_data.iconList.length) {
          this.iconList = _data.iconList
        }
        if (_data.recommendList.length) {
          this.recommendList = _data.recommendList
        }
        if (_data.weekendList.length) {
          this.weekendList = _data.weekendList
        }
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
