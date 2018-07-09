<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      const data = res.data
      if (data.ret) {
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
