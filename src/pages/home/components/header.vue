<template>
  <header class="header">
    <input @input="tip" class="header-input" type="text" :placeholder="searchTip" />
    <router-link class="header-right" to="/city">
      <p class="current-city">{{this.$store.state.chooseCity}}</p>
      <div class="iconfont select">&#xe624;</div>
    </router-link>
  </header>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'holder',
  data () {
    return {
      searchTip: '输入城市/景点/游玩主题'
    }
  },
  methods: {
    tip () {
      Toast({
        message: '没有数据，所以没有做搜索功能',
        duration: 4000
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    background: #00bcd4;
    color: #fff;
    height: 0.4rem;
    padding: 0 .1rem 0 0.05rem;
    .header-input {
        flex: 1;
        height: 0.3rem;
        line-height: 0.3rem;
        background: #fff;
        border-radius: 0.1rem;
        border: 0;
        outline: none;
        text-align: center;
        margin: 0.05rem 0.08rem 0 0;
    }
    .header-right {
        line-height: 0.4rem;
        color: #fff;
        position: relative;
        margin-right: 0.12rem;
        .select {
            position: absolute;
            top: 0.03rem;
            right: -0.14rem;
            transform: rotate(-90deg);
            font-size: .01rem;
        }
    }
}
</style>
