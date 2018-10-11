<template>
  <div class="container">
    <swiper v-if="showSwiper" :options="swiperOption" class="swiper">
      <swiper-slide v-for="(value, key) in list" :key="key">
        <router-link v-bind="{to: '/detail/' + value.id}" class="swipe-link">
          <img :src="value.imgUrl" class="swipe-img">
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'swipe',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper{
    .swipe-img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
