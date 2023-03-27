"use strict";
const common_vendor = require("../common/vendor.js");
const setToken = (token) => {
  common_vendor.index.setStorageSync("TOKEN", token);
};
const clearToken = (token) => {
  common_vendor.index.clearStorageSync("TOKEN");
};
const getToken = () => {
  return common_vendor.index.getStorageSync("TOKEN");
};
exports.clearToken = clearToken;
exports.getToken = getToken;
exports.setToken = setToken;
