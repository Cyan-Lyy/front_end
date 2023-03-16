"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "property",
  data() {
    return {
      propertyIcon: "/static/icons/propertyIcon"
    };
  }
};
if (!Array) {
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_card2 = common_vendor.resolveComponent("fui-card");
  (_easycom_fui_col2 + _easycom_fui_row2 + _easycom_fui_text2 + _easycom_fui_card2)();
}
const _easycom_fui_col = () => "../../node-modules/firstui-uni/firstui/fui-col/fui-col.js";
const _easycom_fui_row = () => "../../node-modules/firstui-uni/firstui/fui-row/fui-row.js";
const _easycom_fui_text = () => "../../node-modules/firstui-uni/firstui/fui-text/fui-text.js";
const _easycom_fui_card = () => "../../node-modules/firstui-uni/firstui/fui-card/fui-card.js";
if (!Math) {
  (_easycom_fui_col + _easycom_fui_row + _easycom_fui_text + _easycom_fui_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      span: 4,
      offset: 4
    }),
    b: common_vendor.p({
      span: 4,
      offset: 4
    }),
    c: common_vendor.p({
      span: 4,
      offset: 4
    }),
    d: common_vendor.p({
      marginTop: "5%"
    }),
    e: common_vendor.p({
      text: "\u4F18\u60E0\u5238",
      size: "28",
      fontWeight: "600",
      color: "#6C6C6C"
    }),
    f: common_vendor.p({
      span: 4,
      offset: 4
    }),
    g: common_vendor.p({
      text: "\u6D88\u8D39\u5206",
      size: "28",
      fontWeight: "600",
      color: "#6C6C6C",
      align: "right"
    }),
    h: common_vendor.p({
      span: 4,
      offset: 4
    }),
    i: common_vendor.p({
      text: "\u5145\u503C\u5361",
      size: "28",
      fontWeight: "600",
      color: "#6C6C6C"
    }),
    j: common_vendor.p({
      span: 4,
      offset: 4
    }),
    k: common_vendor.p({
      src: "/static/icons/propertyIcon.png",
      title: "\u6211\u7684\u8D44\u4EA7"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/graduation project/front-end/components/mine_components/property.vue"]]);
wx.createComponent(Component);
