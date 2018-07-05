<template>
  <div class="icons" v-if="showIcons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      }
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
    },
    showIcons: function () {
      return this.iconList.length
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
