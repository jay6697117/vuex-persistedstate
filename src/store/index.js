import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    string: ''
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    myString: (state, value) => {
      return value ? (state.string = value) : (state.string = '');
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      key: 'vuexDataLs',
      //1.localStorage
      storage: window.localStorage
    }),
    createPersistedState({
      key: 'vuexDataSs',
      // 2.sessionStorage
      storage: window.sessionStorage
    }),
    createPersistedState({
      key: 'vuexDataCs',
      // 3.Cookies
      storage: {
        getItem: key => Cookies.get(key),
        //new Date(new Date().getTime() + 60 * 1000 * 1) 十秒后失效
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: new Date(new Date().getTime() + 10 * 1000 * 1), secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
