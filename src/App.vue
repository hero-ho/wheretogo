<template>
  <transition name="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-enter, .app-leave-to{
  opacity: 0;
}
.app-enter-active, .app-leave-active{
  transition: all 1s ease;
  transform: translate(-2000px, 0);
}
</style>
