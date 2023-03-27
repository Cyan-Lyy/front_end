"use strict";
const common_vendor = require("../../common/vendor.js");
const api_orderApi = require("../../api/orderApi.js");
require("../../api/request.js");
require("../../store/index.js");
require("../../store/user.js");
require("../../api/loginApi.js");
require("../../utils/token.js");
if (!Array) {
  const _component_van_dropdown_item = common_vendor.resolveComponent("van-dropdown-item");
  const _component_van_dropdown_menu = common_vendor.resolveComponent("van-dropdown-menu");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_empty2 = common_vendor.resolveComponent("fui-empty");
  (_component_van_dropdown_item + _component_van_dropdown_menu + _easycom_fui_button2 + _easycom_fui_empty2)();
}
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
const _easycom_fui_empty = () => "../../node-modules/firstui-uni/firstui/fui-empty/fui-empty.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_empty + OrderPreview)();
}
const OrderPreview = () => "../../components/order_components/order_preview.js";
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const store = common_vendor.useStore();
    common_vendor.computed$1(() => store.state.user.userInfo.id);
    const options1 = [
      {
        text: "\u5168\u90E8\u8BA2\u5355",
        value: 1
      },
      {
        text: "\u5DF2\u5B8C\u6210",
        value: 2
      },
      {
        text: "\u8FDB\u884C\u4E2D",
        value: 3
      }
    ];
    const options2 = [
      {
        text: "\u9ED8\u8BA4\u6392\u5E8F",
        value: 1
      },
      {
        text: "\u9500\u91CF\u6392\u5E8F",
        value: 2
      },
      {
        text: "\u4EF7\u683C\u6392\u5E8F",
        value: 3
      }
    ];
    const range = 1;
    const sort = 1;
    const pageNum = common_vendor.ref(1);
    common_vendor.computed$1(() => {
      return [{
        value: "33"
      }];
    });
    const orderList = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      getOrderList();
    });
    const getOrderList = () => {
      api_orderApi.orderApi.orderList({
        pageNum: pageNum.value
      }).then((res) => {
        console.log(res.data);
        orderList.value = res.orderList;
        pageNum.value++;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          value: range,
          options: options1
        }),
        b: common_vendor.p({
          value: sort,
          options: options2
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
        e: orderList.value === null,
        f: common_vendor.p({
          src: "/static/pictures/empty_order.jpg",
          title: "\u6682\u65E0\u8BA2\u5355",
          width: "600",
          height: "500",
          isFixed: "true"
        }),
        g: common_vendor.f(orderList.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: "413efa9d-5-" + i0,
            c: common_vendor.p({
              orderDetails: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
