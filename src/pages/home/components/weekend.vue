<template>
  <div class="weekend" v-show="list.length">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li v-for="(value, key) in list" :key="key">
        <router-link v-bind="{to: '/detail/' + value.id}" class="item-link">
          <div class="item-img">
            <img class="img"  v-lazy="value.imgUrl"/>
          </div>
          <div class="item-info">
            <p class="item-title">{{value.title}}</p>
            <p class="item-desc">{{value.desc}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)
export default {
  name: 'weekend',
  props: {
    list: Array
  }
}
</script>
<style lang="less" scoped>
.weekend{
  background: #fff;
  .weekend-title{
    font-weight: 600;
    font-size: .16rem;
    line-height: .3rem;
    text-indent:.1rem;
    background: #eee;
  }
  .item-link{
    display: block;
    .item-img{
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      position: relative;
      .img{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
    .item-info{
      padding: .07rem .07rem 0 .07rem;
      overflow: hidden;
      .item-title{
        line-height: .18rem;
        font-size: .15rem;
        color: #333;
      }
      .item-desc{
        line-height: .3rem;
        color: #ccc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
