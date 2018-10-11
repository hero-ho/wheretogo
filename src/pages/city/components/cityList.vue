<template>
  <div class="container" v-show="cities.A">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="(value, key) in cities" :key="key" class="item-letter">
          <h4 class="letter" :ref="key">{{key}}</h4>
          <ul>
            <li v-for="(item, index) in value" :key="index" class="item-city">
              <p @click="chooseCurrentCity" class="item-content">{{item.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ul class="letter-list">
      <li @click="scrollHere" v-for="(item, index) in letterList" :key="index" ref="itemLetter" class="item-leter">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { setItem } from '@/assets/common/localStorage.js'
export default {
  name: 'cityList',
  props: ['cities', 'letterList'],
  data () {
    return {
      scroll: ''
    }
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
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          mouseWheel: { // pc端同样能滑动
            invert: false,
            easeTime: 300,
            probeType: 3
          }
        })
      })
    },
    scrollHere (e) {
      const scrollThisElement = this.$refs[e.target.innerText][0]
      this.scroll.scrollToElement(scrollThisElement, 300)
    },
    setHeight () {
      const windowHeight = window.innerHeight // 获取视口高度
      // 设置 BScroll 作用的区域的高。以防出现滚动条
      this.$refs.wrapper.style.height = windowHeight - 270 + 'px'
      // 设置右侧字母，每个li的高度
      this.$refs.itemLetter.forEach(item => {
        item.style.lineHeight = (windowHeight - 70) / 22 + 'px'
      })
    }
  },
  mounted () {
    this.initBScroll()
    this.setHeight()
  }
}
</script>
<style lang="less" scoped>
.wrapper {
    overflow: hidden;
    .content {
        .item-letter {
            .letter {
                font-weight: normal;
                background-color: #eee;
                line-height: 0.3rem;
                padding-left: 0.12rem;
            }
            .item-city {
                line-height: 0.35rem;
                .item-content {
                    text-indent: 0.12rem;
                    border-bottom: 0.02rem solid #eee;
                }
            }
        }
    }
}
.letter-list {
    position: fixed;
    z-index: 1;
    //top: 0.7rem;
    bottom: 0.04rem;
    right: 0rem;
    text-align: center;
    color: #00bcd4;
    .item-leter {
      width: 0.33rem;
    }
}
</style>
