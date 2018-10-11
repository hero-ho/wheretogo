<template>
<div class="container">
  <swiper v-if="showIcon" :options="swiperOption" class="swiper">
    <swiper-slide v-for="(value,key) in iconList" :key="key">
      <ul class="grid clearfix">
        <li v-for="(item, index) in value" :key="index" class="grid-item">
          <router-link v-bind="{to: '/detail/'+ item.id}" class="grid-link">
            <img :src="item.imgUrl" class="grid-img">
            <p>{{item.desc}}</p>
          </router-link>
        </li>
      </ul>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'grid',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    iconList () {
      let arr = []
      this.list.forEach((item, index) => {
        let i = Math.floor(index / 8)
        if (!arr[i]) {
          arr[i] = []
        }
        arr[i].push(item)
      })
      return arr
    },
    showIcon () {
      return this.list.length
    }
  }
}
</script>
<style lang="less" scoped>
// 覆盖vue-awesome-swiper的样式
.swiper /deep/ .swiper-pagination-bullet-active{
  background-color: #007afa;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
}
.container {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 58%;
  position: relative;
  z-index: 0;
  .grid{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 58%;
    background-color: #fff;
    text-align: center;
    .grid-item{
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
      margin-top: .08rem;
      .grid-link{
        color: #333;
        position: absolute;
        top: 0rem;
        left: 0;
        right: 0;
        bottom: .22rem;
        .grid-img{
          height: 100%;
        }
      }
    }
  }
}
</style>
