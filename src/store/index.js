import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    string: ''
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    myString: (state, value) => (value ? (state.string = value) : (state.string = ''))
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      key:'vuexData',
      //1.localStorage
      // storage: window.localStorage,
      // 2.sessionStorage
      storage: window.sessionStorage
    })
  ]
});
