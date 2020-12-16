import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  userRoles: []
};

const getters = {
  userRoles: state => state.userRoles
};

const mutations = {
  UPDATE_USER_ROLES: (state, payload) => {
    state.userRoles = payload;
  }
};

const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
