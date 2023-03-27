"use strict";
const api_loginApi = require("../api/loginApi.js");
const utils_token = require("../utils/token.js");
const state = {
  token: utils_token.getToken(),
  userInfo: {}
};
const mutations = {
  SET_USERINFO(state2, userInfo) {
    state2.userInfo = userInfo;
  },
  SET_TOKEN(state2, token) {
    state2.token = token;
  },
  USER_LOGOUT(state2) {
    state2.userInfo = {};
    state2.token = "";
    utils_token.clearToken();
  }
};
const getters = {};
const actions = {
  async userLogin({ commit }, code) {
    let result = await api_loginApi.wxLogin(code);
    console.log(result);
    if (result.code === 0) {
      commit("SET_USERINFO", result.userInfo);
      commit("SET_TOKEN", result.token);
      utils_token.setToken(result.token);
    } else {
      return Promise.reject(result.msg);
    }
  },
  async getUserInfo({ commit }) {
    let result = await api_loginApi.getUserInfo();
    if (result.code === 0) {
      commit("SET_USERINFO", result.userInfo);
      return "ok";
    } else {
      return Promise.reject(new Error(result.msg));
    }
  },
  async userLogout({ commit }) {
    let result = await api_loginApi.logout();
    if (result.code === 0) {
      commit("USER_LOGOUT");
    } else {
      return Promise.reject(result.msg);
    }
  }
};
const user = {
  namespace: true,
  state,
  mutations,
  actions,
  getters
};
exports.user = user;
