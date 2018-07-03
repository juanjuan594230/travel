<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1000
      },
      swiperList: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/97/f282eaa627305102.jpg_750x200_bfa4f1aa.jpg'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1708/7c/c0b9acba07764302.jpg_750x200_389436b7.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom : 26.7%
    .swiper-img
      width : 100%
</style>
