<template>
  <div v-show="categoryList.length">
    <banner :data="banner" :gallaryImgs="gallaryImgs"></banner>
    <category :data="categoryList"></category>
  </div>
</template>
<script>
import { getDetail } from '@/axios'
import banner from './components/banner.vue'
import category from './components/category.vue'
import { Indicator } from 'mint-ui'
export default {
  name: 'detail',
  components: {
    banner,
    category
  },
  data () {
    return {
      categoryList: [],
      banner: {},
      gallaryImgs: []
    }
  },
  created () {
    getDetail().then((res) => { // axios获取数据
      this.categoryList = res.data.categoryList
      this.banner = res.data.banner
      this.gallaryImgs = res.data.gallaryImgs
      Indicator.close()
    })
  }
}
</script>
<style scoped>
</style>
