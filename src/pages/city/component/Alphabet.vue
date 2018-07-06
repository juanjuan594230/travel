<template>
  <ul class="alphabet-list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .alphabet-list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    text-align center
    .item
      line-height .36rem
      color $bgColor
</style>
