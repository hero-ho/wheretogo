<template>
  <div class="recommend" v-show="list.length">
    <h2 class="recommend-title">热销推荐</h2>
      <ul>
        <li class="recommend-item"  v-for="(value, key) in list" :key="key">
          <img class="item-img" v-lazy="value.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{value.title}}</p>
            <p class="item-desc">{{value.desc}}</p>
            <router-link v-bind="{to: '/detail/' + value.id}">
              <button class="item-button">查看详细</button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)
export default {
  name: 'recommend',
  props: {
    list: Array
  }
}
</script>
<style lang="less" scoped>
.recommend{
  background: #fff;
  .recommend-title{
    font-weight: 600;
    font-size: .16rem;
    line-height: .3rem;
    text-indent:.1rem;
    background: #eee;
  }
  .recommend-item{
    overflow: hidden;
    display: flex;
    height: 1rem;
    .item-img{
      width: .9rem;
      height: .9rem;
      padding: .05rem;
    }
    .item-info{
      flex: 1;
      padding: .05rem .05rem .05rem 0;
      box-sizing: border-box;
      overflow: hidden;
      .item-title{
        line-height: .2rem;
        font-size: .18rem;
        color: #333;
      }
      .item-desc{
        line-height: .4rem;
        color: #ccc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item-button{
        line-height: .28rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        border:none;
        color: #fff;
      }
    }
  }
}
</style>
