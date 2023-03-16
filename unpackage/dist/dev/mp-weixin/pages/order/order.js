"use strict";
const common_vendor = require("../../common/vendor.js");
const OrderPreview = () => "../../components/order_components/order_preview.js";
const _sfc_main = {
  components: {
    OrderPreview
  },
  data() {
    return {
      options1: [{
        text: "\u5168\u90E8\u8BA2\u5355",
        value: 1
      }, {
        text: "\u5DF2\u5B8C\u6210",
        value: 2
      }, {
        text: "\u8FDB\u884C\u4E2D",
        value: 3
      }],
      options2: [{
        text: "\u9ED8\u8BA4\u6392\u5E8F",
        value: 1
      }, {
        text: "\u9500\u91CF\u6392\u5E8F",
        value: 2
      }, {
        text: "\u4EF7\u683C\u6392\u5E8F",
        value: 3
      }],
      range: 1,
      sort: 1,
      orders: [{
        value: "33"
      }],
      orderList: [{ id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }]
    };
  },
  methods: {}
};
if (!Array) {
  const _component_van_dropdown_item = common_vendor.resolveComponent("van-dropdown-item");
  const _component_van_dropdown_menu = common_vendor.resolveComponent("van-dropdown-menu");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_empty2 = common_vendor.resolveComponent("fui-empty");
  const _component_OrderPreview = common_vendor.resolveComponent("OrderPreview");
  (_component_van_dropdown_item + _component_van_dropdown_menu + _easycom_fui_button2 + _easycom_fui_empty2 + _component_OrderPreview)();
}
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
const _easycom_fui_empty = () => "../../node-modules/firstui-uni/firstui/fui-empty/fui-empty.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.range,
      options: $data.options1
    }),
    b: common_vendor.p({
      value: $data.sort,
      options: $data.options2
    }),
    c: common_vendor.p({
      activeColor: "#87CEFA"
    }),
    d: common_vendor.p({
      text: "\u8FD4\u56DE\u9996\u9875",
      size: 28,
      width: "336rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "#fff",
      margin: ["64rpx", "0"],
      borderColor: "#87CEFA",
      color: "#87CEFA"
    }),
    e: $data.orders === null,
    f: common_vendor.p({
      src: "/static/pictures/empty_order.jpg",
      title: "\u6682\u65E0\u8BA2\u5355",
      width: "600",
      height: "500",
      isFixed: "true"
    }),
    g: common_vendor.f($data.orderList, (item, k0, i0) => {
      return {
        a: item.id,
        b: "413efa9d-5-" + i0,
        c: common_vendor.p({
          orderDetails: item.name
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/graduation project/front-end/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
