<template>
  <ul class="category" v-show="data.length">
    <li v-for="(value, key) in data" :key="key" class="category-item">
      <router-link to="/" class="link">
        <span class="itme-icon"></span>
        {{value.title}}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'category',
  props: {
    data: Array
  }
}
</script>
<style lang="less" scoped>
.category {
    .category-item {
        text-indent: 0.1rem;
        line-height: 0.35rem;
        border-bottom: 0.02rem solid #eee;
        .link {
            color: #333;
            display: block;
            .itme-icon {
                position: relative;
                left: 0rem;
                top: 0.05rem;
                display: inline-block;
                width: 0.18rem;
                height: 0.18rem;
                margin-right: 0.03rem;
                border-radius: 0.09rem;
                background: url('https://s.qunarzz.com/piao/image/touch/sight/detail.png')
                    no-repeat 0 -0.51rem;
                background-size: 0.22rem 2.91rem;
            }
        }
    }
}
</style>
