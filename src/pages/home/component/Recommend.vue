<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul class="recommend-list">
      <li class="recommend-item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data: function () {
    return {
      recommendList: [
        { id: '0001', 
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/80/809d836b77660cdda3.img.jpg_200x200_b700e95e.jpg',
          title: '泉林山庄水上乐园',
          desc: '泉林山庄水上乐园'
        },
        { id: '0002', 
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/57/570812106eff912ea3.img.jpg_200x200_1a581ad1.jpg',
          title: '泉林山庄水上乐园',
          desc: '泉林山庄水上乐园'
        },
        { id: '0003', 
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/d6/d6c26678b2f50ecd90.water.jpg_200x200_0076058f.jpg',
          title: '泉林山庄水上乐园',
          desc: '泉林山庄水上乐园'
        }
      ]
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

