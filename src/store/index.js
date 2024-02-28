import { createStore } from 'vuex';
import helper from './helper';
import region from './modules/region';
import data from './modules/data';
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    helper,
    region,
    data
  }
})
