<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      城市<span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  .header
    display : flex
    height : .88rem
    line-height : .88rem
    color : #fff
    background-color : $bgColor
    .header-left
      float : left
      width : 0.64rem
      margin-right : .1rem
      text-align : center
      .back-icon
        font-size : .4rem
    .header-input
      flex : 1
      height : .64rem
      line-height : .64rem
      border-radius : .11rem
      margin: 0.14rem 0
      padding-left : .2rem
      color : #ccc
      background-color : #fff
    .header-right
      float : right
      min-width : 1.04rem
      padding: 0 .1rem
      text-align : center
      .arrow-icon
        font-size : .24rem
</style>
