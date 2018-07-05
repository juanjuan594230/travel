<template>
  <div class="weekend" v-if="showWeekend">
    <div class="weekend-title">周末去哪</div>
    <ul class="weekend-list">
      <li class="weekend-item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  computed: {
    showWeekend: function () {
      return this.weekendList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  @import '../../../assets/styles/minixs.styl'
  .weekend-title
    padding .24rem 0 .24rem .24rem
    line-height .44rem
    font-size .32rem
    color @textColor
    background-color #eee
  .weekend-list
    background-color #eee
  .weekend-item
    margin-bottom .1rem
    color $textColor
    .item-img-wrapper
      height 0
      overflow hidden
      padding-bottom 37.4375%
      img
        width 100%
    .item-info
      padding .14rem .2rem .2rem .2rem
      background-color #fff
      .item-title
        line-height .48rem
        font-size .28rem
        ellipsis()
      .item-desc
        line-height .42rem
        font-size .24rem
        color #616161
        ellipsis()
</style>
