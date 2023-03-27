"use strict";
const common_vendor = require("../common/vendor.js");
const store_index = require("../store/index.js");
const utils_token = require("../utils/token.js");
const base_url = "http://cqzgmq.natappfree.cc";
const request = (url, method, params) => {
  if (store_index.store.state.user.token) {
    console.log(store_index.store.state.user.token, "sbsbsbsb");
    store_index.store.state.user.token;
  }
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: base_url + url,
      method,
      header: { token: utils_token.getToken() },
      data: params,
      success(response) {
        const res = response;
        if (res.data.code == "0") {
          resolve(res.data);
        } else if (res.data.code !== "0") {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none",
            success() {
              common_vendor.index.navigateTo({
                url: "/pages/login/index"
              });
            }
          });
        }
      },
      fail(err) {
        reject(err);
        console.log(err);
      },
      complete() {
      }
    });
  }).catch((e) => {
  });
};
exports.request = request;
