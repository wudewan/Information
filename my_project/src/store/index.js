import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:sessionStorage.getItem("islogin"),//用于保存当前是否已登录
    username:sessionStorage.getItem("username")
  },
  mutations: {
    loginOK(state,username){
      state.islogin = true;
      state.username = username;
    }
  },
  actions: {
  },
  modules: {
  }
})
