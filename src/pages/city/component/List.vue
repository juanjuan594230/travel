<template>
  <div class="list">
    <div class="area">
      <div class="title">您的位置</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">厦门</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">西安</div>
        </div>
        <div class="button-wrapper">
          <div class="button">太原</div>
        </div>
        <div class="button-wrapper">
          <div class="button">深圳</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">澳门</div>
        <div class="item border-bottom">阿里巴巴</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">澳门</div>
        <div class="item border-bottom">阿里巴巴</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">澳门</div>
        <div class="item border-bottom">阿里巴巴</div>
      </div>
    </div>
    <div class="area">
      <div class="title">B</div>
      <div class="item-list">
        <div class="item border-bottom">北京</div>
        <div class="item border-bottom">澳门</div>
        <div class="item border-bottom">阿里巴巴</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityList'
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color #eee
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0px
    right 0px
    bottom 0px
    .title
      line-height .44rem
      padding-left .2rem
      font-size .26rem
      background-color #eee
    .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float: left
          width: 33.33%
          .button
            margin: .1rem
            padding: .1rem 0
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
