<template>
  <div class="detail-header">
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/varibles.styl'
  .header-abs
    z-index 2
    position absolute
    left .1rem
    top .1rem
    width .72rem
    height .72rem
    line-height .72rem
    border-radius 50%
    font-size .36rem
    text-align center
    background rgba(0,0,0,.5)
    .header-abs-back
      color #fff
  .header-fixed
    z-index 2
    position fixed
    left 0
    right 0
    top 0
    height .8rem
    line-height .8rem
    background $bgColor
    color #fff
    text-align center
    font-size .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
