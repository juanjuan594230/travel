<template>
  <div class="recommend" v-if="showRecommend">
    <div class="recommend-title">热销推荐</div>
    <ul class="recommend-list">
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="recommend-item border-bottom"
        v-for="item in recommendList"
        :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  computed: {
    showRecommend: function () {
      return this.recommendList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  @import '../../../assets/styles/minixs.styl'
  .recommend-title
    padding .24rem 0 .24rem .24rem
    line-height .44rem
    font-size .32rem
    color @textColor
    background-color #eee
  .recommend-list
    padding-left .24rem
    .recommend-item
      overflow hidden
      height 2rem
      padding .2rem 0
      display flex
      color @textColor
      .item-img-wrapper
        width 2rem
        height 2rem
        img
          width 100%
          height 100%
      .item-info
        flex 1
        padding-left .22rem
        min-width 0
        .item-title
          margin-top .26rem
          line-height .44rem
          font-size .32rem
          ellipsis()
        .item-desc
          margin-top .14rem
          height .34rem
          font-size .28rem
          color #cccccc
          ellipsis()
        .item-button
          line-height: .44rem
          margin-top: .16rem
          background: #ff9300
          padding: 0 .2rem
          border-radius: .06rem
          color: #fff
</style>
