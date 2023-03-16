"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "func_list",
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_list2 = common_vendor.resolveComponent("fui-list");
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  (_easycom_fui_text2 + _easycom_fui_list_cell2 + _easycom_fui_list2 + _easycom_fui_col2 + _easycom_fui_row2)();
}
const _easycom_fui_text = () => "../../node-modules/firstui-uni/firstui/fui-text/fui-text.js";
const _easycom_fui_list_cell = () => "../../node-modules/firstui-uni/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_list = () => "../../node-modules/firstui-uni/firstui/fui-list/fui-list.js";
const _easycom_fui_col = () => "../../node-modules/firstui-uni/firstui/fui-col/fui-col.js";
const _easycom_fui_row = () => "../../node-modules/firstui-uni/firstui/fui-row/fui-row.js";
if (!Math) {
  (_easycom_fui_text + _easycom_fui_list_cell + _easycom_fui_list + _easycom_fui_col + _easycom_fui_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "\u5E38\u89C1\u95EE\u9898"
    }),
    b: common_vendor.p({
      arrow: true
    }),
    c: common_vendor.p({
      text: "\u8054\u7CFB\u6211\u4EEC"
    }),
    d: common_vendor.p({
      arrow: true
    }),
    e: common_vendor.p({
      text: "\u5E2E\u52A9\u4E0E\u53CD\u9988"
    }),
    f: common_vendor.p({
      arrow: true
    }),
    g: common_vendor.p({
      text: "\u5173\u4E8E"
    }),
    h: common_vendor.p({
      arrow: true
    }),
    i: common_vendor.p({
      span: 22,
      offset: 1
    }),
    j: common_vendor.p({
      marginBottom: "20rpx",
      marginTop: "70rpx"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/graduation project/front-end/components/mine_components/func_list.vue"]]);
wx.createComponent(Component);
