import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import SecureLS from 'secure-ls';
// const ls = new SecureLS({ isCompression: false });

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
      // 1.SecureLS
      // storage: {
      //   getItem: key => ls.get(key),
      //   setItem: (key, value) => ls.set(key, value),
      //   removeItem: key => ls.remove(key)
      // },
      //2.localStorage
      // storage: {
      //   getItem: key => localStorage.getItem(key),
      //   setItem: (key, value) => ls.getItem(key, value),
      //   removeItem: key => ls.removeItem(key)
      // },
      //2.sessionStorage
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.getItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    })
  ]
});
