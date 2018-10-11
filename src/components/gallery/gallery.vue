<template>
  <div class="container" @click="handleHiddenGallery">
    <div class="gallery">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(value, index) in gallaryImgs" :key="index">
          <img :src="value" class="swipe-img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gallery',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleHiddenGallery () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .gallery{
    .swiper{
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      overflow: inherit;
      .swipe-img{
        width: 100%;
      }
      .swiper-pagination{
        bottom: -.4rem;
      }
    }
  }
}
</style>
