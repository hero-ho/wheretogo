<template>
  <div class="container" v-show="data.bannerImg">
    <div id="banner" class="banner" @click="handleShowGallery">
      <div class="back" @click.stop="back">
        <div class="iconfont back-info">&#xe624;</div>
      </div>
      <img :src="data.bannerImg" class="bannerImg">
      <div class="banner-title">
        <h3 class="title">{{data.sightName}}</h3>
        <p class="icon">
          <span class="iconfont"> &#xe692; </span>
          {{gallaryImgs.length}}
        </p>
      </div>
    </div>
    <transition name="gallery">
      <gallery :gallaryImgs="gallaryImgs" v-show="showGallery" @close="handleHiddenGallery"></gallery>
    </transition>
  </div>
</template>
<script>
import '@/assets/css/iconfont.css'
import gallery from '@/components/gallery/gallery.vue'
export default {
  name: 'banner',
  components: {
    gallery
  },
  props: {
    data: Object,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    handleShowGallery () {
      this.showGallery = true
    },
    handleHiddenGallery () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="less" scoped>
.gallery-enter,
.gallery-leave-to {
    opacity: 0;
}
.gallery-enter-active,
.gallery-leave-active {
    transition: opacity 1s;
}
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .back {
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        background-color: #333;
        color: #fff;
        top: 0.1rem;
        left: 0.1rem;
        line-height: 0.4rem;
        border-radius: 0.2rem;
        font-size: 0.35rem;
        .back-info {
            position: relative;
            top: 0;
            left: 0.05rem;
            font-size: 0.24rem;
        }
    }
    .bannerImg {
        width: 100%;
    }
    .banner-title {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        width: 100%;
        line-height: 0.25rem;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.8)));
        background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .title {
            font-weight: normal;
            font-size: 0.14rem;
            letter-spacing: 0.01rem;
            float: left;
            padding-left: 0.12rem;
        }
        .icon {
            float: right;
            padding-right: 0.12rem;
            .iconfont {
                margin-right: 0.02rem;
            }
        }
    }
}
</style>
