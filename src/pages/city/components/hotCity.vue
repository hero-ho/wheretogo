<template>
  <div class="container" v-show="hotCities.length">
    <div class="choose">
      <div @click="back" class="iconfont back">&#xe624;</div>
      <h1 class="choose-city">选择城市</h1>
      <input v-model.trim="keywords" class="choose-input" placeholder="输入城市名或拼音" type="text">
    </div>
    <h3 class="position">当前城市</h3>
    <div class="city">
      <div class="city-content" @click="chooseCurrentCity">{{this.$store.state.chooseCity}}</div>
    </div>
    <h3 class="position">热门城市</h3>
    <ul class="hot-city">
      <li class="hot-city-item" v-for="(value, key) in hotCities" :key="key">
        <div @click="chooseCurrentCity" class="hot-city-content">
          {{value.name}}
        </div>
      </li>
    </ul>
    <div v-show="keywords" ref="searchResult" class="search-result">
      <ul>
        <li @click="chooseCurrentCity" v-for="(item, index) in result" :key="index" class="search-result-item">
          {{item.name}}
        </li>
        <li class="search-result-item" v-show="!result.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  /* getItem, */
  setItem
} from '@/assets/common/localStorage.js'
import BScroll from 'better-scroll'
export default {
  name: 'hotCity',
  props: ['hotCities', 'cities'],
  data () {
    return {
      keywords: '',
      result: []
    }
  },
  watch: {
    keywords () {
      let result = []
      if (!this.keywords) {
        this.result = []
        return
      }
      for (let i in this.cities) {
        this.cities[i].forEach(value => {
          if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
            result.push(value)
          }
        })
      }
      this.result = result
    }
  },
  mounted () {
    this.initBScroll()
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    chooseCurrentCity (e) {
      this.$store.commit('setChooseCity', e.target.innerText) // 将城市commit到vuex
      setItem('city', e.target.innerText) // 将城市保存到localStorage
      this.back()
    },
    initBScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.searchResult, {
          click: true,
          mouseWheel: {
            invert: false,
            easeTime: 300,
            probeType: 3
          }
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
    .choose {
        background-color: #00bcd4;
        color: #fff;
        padding: 0 0.06rem 0.06rem;
        position: relative;
        .back {
            font-size: 0.2rem;
            position: absolute;
            width: 0.3rem;
            line-height: 0.3rem;
        }
        .choose-city {
            line-height: 0.3rem;
            font-weight: normal;
            font-size: 0.16rem;
            text-align: center;
        }
        .choose-input {
            width: 100%;
            line-height: 0.34rem;
            border: none;
            outline: none;
            text-align: center;
            border-radius: 0.08rem;
        }
    }
    .position {
        font-weight: normal;
        font-size: 0.15rem;
        padding: 0.08rem 0.12rem;
        background-color: #eee;
    }
    .city {
        background-color: #fff;
        padding: 0.12rem;
        .city-content {
            width: 1.05rem;
            height: 0.24rem;
            line-height: 0.24rem;
            font-size: 0.14rem;
            text-align: center;
            border: 0.01rem solid #ccc;
            border-radius: 0.05rem;
        }
    }
    .hot-city {
        padding-right: 0.22rem;
        padding-bottom: 0.12rem;
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        .hot-city-item {
            width: 33.3333333333%;
            padding: 0.12rem 0.12rem 0;
            box-sizing: border-box;
            .hot-city-content {
                border-radius: 0.05rem;
                border: 0.01rem solid #ccc;
                text-align: center;
            }
        }
    }
    .search-result {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #eee;
        top: 0.7rem;
        left: 0;
        z-index: 2;
        text-indent: 0.06rem;
        overflow: hidden;
        .search-result-item {
            background-color: #fff;
            line-height: 0.35rem;
            border-bottom: 0.02rem solid #eee;
        }
    }
}
</style>
