"use strict";
const common_vendor = require("../common/vendor.js");
const store_user = require("./user.js");
const store = common_vendor.createStore({
  modules: {
    user: store_user.user
  }
});
exports.store = store;
