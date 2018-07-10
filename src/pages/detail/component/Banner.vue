<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="banner-img">
        <img :src="bannerImg">
      </div>
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont img-icon">&#xe608;</span>{{gallaryImgs.length}}
      </div>
    </div>
    <common-fade>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleCloseClick"></common-gallary>
    </common-fade>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/Gallary.vue'
import commonFade from 'common/fade/Fade.vue'
export default {
  name: 'detailBanner',
  props: {
    gallaryImgs: Array,
    sightName: String,
    bannerImg: String
  },
  components: {
    commonGallary,
    commonFade
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    color #fff
    .banner-img
      overflow hidden
      width 100%
      height 0
      padding-bottom 55%
      img
        width 100%
    .banner-title
      position absolute
      bottom .2rem
      left .15rem
      line-height .4rem
      font-size .36rem
    .banner-number
      position absolute
      top 2.95rem
      left .15rem
      width 1.2rem
      height .4rem
      line-height .4rem
      background rgba(0,0,0,.5)
      border-radius .2rem
      font-size .24rem
      text-align center
      .img-icon
        font-size .24rem
        padding-right .15rem
</style>
