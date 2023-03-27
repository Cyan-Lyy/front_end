"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const bookPlace = () => {
      common_vendor.index.navigateTo({
        url: "/pages/bookPlace/bookPlace"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(bookPlace)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
