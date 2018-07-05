<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import cityHeader from './component/Header.vue'
import citySearch from './component/Search.vue'
export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
