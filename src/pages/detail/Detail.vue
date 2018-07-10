<template>
  <div class="detail">
    <detail-banner :imgs="imgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './component/Banner.vue'
import detailHeader from './component/Header.vue'
import detailList from './component/List.vue'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1501/89/babe532d89b23ac070bc09dd092dc9b0.water.jpg_350x240_771a725e.jpg',
        'http://img1.qunarzz.com/sight/p0/1501/48/7ca26276c03646cabe4dd0de71dc09c4.water.jpg_350x240_f0c1adc8.jpg'],
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人第三级1'
          }, {
            title: '成人第三级2'
          }]
        }, {
          title: '成人两馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
