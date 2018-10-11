import Vue from 'vue'
import Vuex from 'vuex'
import { getItem } from '@/assets/common/localStorage.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    chooseCity: getItem('city') || '北京'
  },
  mutations: {
    setChooseCity (state, chooseCity) {
      state.chooseCity = chooseCity
    }
  }
})

export default store
