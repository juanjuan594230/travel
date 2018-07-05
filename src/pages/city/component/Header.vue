<template>
  <div class="header">
    <span>城市选择</span>
    <router-link to="/">
      <i class="header-back iconfont">&#xe624;</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position absolute
      top 0px
      left 0px
      width .8rem
      height .86rem
      font-size .4rem
      color #fff
</style>
