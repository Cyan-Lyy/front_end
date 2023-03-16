"use strict";
const state = {
  token: "qwe",
  userInfo: {}
};
const mutations = {
  SET_USERINFO(state2, userInfo) {
    state2.userInfo = userInfo;
  },
  SET_TOKEN(state2, token) {
    state2.token = token;
  }
};
const getters = {};
const actions = {};
const user = {
  namespace: true,
  state,
  mutations,
  actions,
  getters
};
exports.user = user;
