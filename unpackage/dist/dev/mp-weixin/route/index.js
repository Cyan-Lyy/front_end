"use strict";
const common_vendor = require("../common/vendor.js");
const route_routes = require("./routes.js");
const router = common_vendor.createRouter({
  routes: route_routes.routes,
  history: common_vendor.createMemoryHistory()
});
exports.router = router;
