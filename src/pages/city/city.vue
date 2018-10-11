<template>
  <div class="city" v-show="hotCities.length">
    <hot-city :hotCities="hotCities" :cities="cities"></hot-city>
    <city-list :cities="cities" :letterList="letterList"></city-list>
  </div>
</template>
<script>
import hotCity from './components/hotCity.vue'
import cityList from './components/cityList.vue'
import { getCity } from '@/axios'
import { Indicator } from 'mint-ui'
export default {
  name: 'city',
  components: {
    hotCity,
    cityList
  },
  data () {
    return {
      hotCities: '',
      cities: '',
      letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
    }
  },
  created () {
    getCity().then(res => { // axios获取数据
      this.hotCities = res.data.hotCities
      this.cities = res.data.cities
      Indicator.close()
    })
  }
}
</script>
<style lang="less" scoped>
</style>
