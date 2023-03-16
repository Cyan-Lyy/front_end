"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/user.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/notification/notification.js";
  "./pages/order/order.js";
  "./pages/mine/mine.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    common_vendor.wx$1.cloud.init({});
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
