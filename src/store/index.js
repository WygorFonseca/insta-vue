import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    USER_SET_STATE(state, user) {
      state.user = user;
    }
  },
  actions: {},
  modules: {}
});
