import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Investments and Savings', href: '/investments' },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
