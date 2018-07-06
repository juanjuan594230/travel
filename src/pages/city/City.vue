<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './component/Header.vue'
import citySearch from './component/Search.vue'
import cityList from './component/List.vue'
import cityAlphabet from './component/Alphabet.vue'
export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
