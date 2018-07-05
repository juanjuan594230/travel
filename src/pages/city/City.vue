<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import cityHeader from './component/Header.vue'
import citySearch from './component/Search.vue'
import cityList from './component/List.vue'
export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList
  }
}
</script>

<style lang="stylus" scoped>

</style>
