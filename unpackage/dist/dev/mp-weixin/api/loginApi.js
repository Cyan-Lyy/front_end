"use strict";
const api_request = require("./request.js");
const wxLogin = (code) => {
  return api_request.request(`/api/auth/wxLogin`, "GET", { code });
};
const getUserInfo = () => {
  return api_request.request(`/api/user/info`, "GET");
};
const logout = () => {
  return api_request.request(`/api/auth/logout`, "GET");
};
exports.getUserInfo = getUserInfo;
exports.logout = logout;
exports.wxLogin = wxLogin;
