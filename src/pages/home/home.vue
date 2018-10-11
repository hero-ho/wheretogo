<template>
  <div v-show="swiperList.length">
    <holder></holder>
    <swipe :list="swiperList"></swipe>
    <grid :list="iconList"></grid>
    <recommend :list="recommendList"></recommend>
    <weekend :list="recommendList"></weekend>
  </div>
</template>
<script>
import { getIndex } from '@/axios'
import holder from './components/header.vue'
import swipe from './components/swiper.vue'
import grid from './components/grid.vue'
import recommend from './components/recommend.vue'
import weekend from './components/weekend.vue'
import { Indicator } from 'mint-ui'
export default {
  name: 'home',
  components: {
    holder,
    swipe,
    grid,
    recommend,
    weekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      lastCity: ''
    }
  },
  created () {
    this.lastCity = this.$store.state.chooseCity
    this.getData().then(() => Indicator.close())
  },
  activated () {
    if (this.lastCity !== this.$store.state.chooseCity) {
      this.lastCity = this.$store.state.chooseCity
      this.getData().then(() => Indicator.close())
    }
  },
  methods: {
    getData () {
      return getIndex({
        params: { city: this.$store.state.chooseCity } // axios获取某个城市对应的数据
      }).then((res) => {
        this.swiperList = res.swiperList // 轮播图数据
        this.iconList = res.iconList // 九宫格数据
        this.recommendList = res.recommed // 热销推荐、周末去哪儿数据
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
