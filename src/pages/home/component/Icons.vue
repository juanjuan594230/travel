<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {id: '001', text: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {id: '002', text: '温泉', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'},
        {id: '003', text: '水上玩乐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
        {id: '004', text: '摩天轮', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
        {id: '005', text: '农家度假', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png'},
        {id: '006', text: '游乐场', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
        {id: '007', text: '游船游艇', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png'},
        {id: '008', text: '自然风光', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png'},
        {id: '009', text: '玩转长隆', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
        {id: '010', text: '全部玩乐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'}
      ]
      // pages: [
      //   [
      //     {id: '001', text: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
      //     {id: '002', text: '温泉', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'},
      //     {id: '003', text: '水上玩乐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
      //     {id: '004', text: '摩天轮', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
      //     {id: '005', text: '农家度假', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png'},
      //     {id: '006', text: '游乐场', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
      //     {id: '007', text: '游船游艇', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png'},
      //     {id: '008', text: '自然风光', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png'}
      //   ],
      //   [
      //     {id: '001', text: '玩转长隆', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
      //     {id: '002', text: '全部玩乐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'}
      //   ],
      // ]
    }
  },
  computed: {
    // pages: function () {
    //   const _pages = []
    //   const _len = Math.ceil(this.iconList.length / 8)
    //   for (let i = 0; i < _len; i++) {
    //     const _temp = []
    //     for (let j = i * 8; j < this.iconList.length; j++) {
    //       if (j < (i + 1) * 8) {
    //         _temp.push(this.iconList[j])
    //       } else {
    //         break
    //       }
    //     }
    //     _pages.push(_temp)
    //   }
    //   return _pages
    // }
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  @import '../../../assets/styles/minixs.styl'
  .icons >>> swiper-container
    padding-bottom: 50%
    height: 0
  .icons
    margin-top .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        margin: .1rem
        .icon-img-content
          display block
          height 100%
          margin 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $textColor
        ellipsis()
</style>
