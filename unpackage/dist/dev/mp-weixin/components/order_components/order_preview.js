"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_card2 = common_vendor.resolveComponent("fui-card");
  (_easycom_fui_icon2 + _easycom_fui_col2 + _easycom_fui_text2 + _easycom_fui_row2 + _easycom_fui_button2 + _easycom_fui_card2)();
}
const _easycom_fui_icon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _easycom_fui_col = () => "../../node-modules/firstui-uni/firstui/fui-col/fui-col.js";
const _easycom_fui_text = () => "../../node-modules/firstui-uni/firstui/fui-text/fui-text.js";
const _easycom_fui_row = () => "../../node-modules/firstui-uni/firstui/fui-row/fui-row.js";
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
const _easycom_fui_card = () => "../../node-modules/firstui-uni/firstui/fui-card/fui-card.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_col + _easycom_fui_text + _easycom_fui_row + _easycom_fui_button + _easycom_fui_card)();
}
const _sfc_main = {
  __name: "order_preview",
  props: {
    orderDetails: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.useRouter();
    common_vendor.useRoute();
    const tag = common_vendor.computed$1(() => {
      switch (props.orderDetails.status) {
        case 0:
          return "\u5F85\u652F\u4ED8";
        case 1:
          return "\u5DF2\u9884\u7EA6";
        case 2:
          return "\u5DF2\u5B8C\u6210";
        case 3:
          return "\u5DF2\u53D6\u6D88";
        default:
          return "\u672A\u77E5\u72B6\u6001";
      }
    });
    const orderTitle = common_vendor.computed$1(() => {
      if (props.orderDetails.orderType === "badminton") {
        return "\u7FBD\u6BDB\u7403\u573A\u5730\u9884\u7EA6";
      } else {
        return "\u7BEE\u7403\u573A\u5730\u9884\u7EA6";
      }
    });
    const viewDetails = () => {
      const { orderDetails: { orderId } } = props;
      common_vendor.index.navigateTo({
        url: `/pages/orderDetail/orderDetail?orderId=${orderId}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "wait",
          size: "60",
          color: "#4F4F4F"
        }),
        b: common_vendor.p({
          span: 2,
          offset: 1
        }),
        c: common_vendor.p({
          type: "gray",
          text: "2023-03-01(\u5468\u4E09) 14:00 - 15:00",
          padding: ["7rpx", "0"]
        }),
        d: common_vendor.p({
          span: 20,
          offset: 1
        }),
        e: common_vendor.p({
          marginTop: "12rpx",
          justify: "center",
          align: "middle"
        }),
        f: common_vendor.p({
          name: "calendar",
          color: "#78CD1A"
        }),
        g: common_vendor.p({
          span: 2,
          offset: 1
        }),
        h: common_vendor.p({
          type: "gray",
          text: "\u9884\u7EA6\u6210\u529F",
          padding: ["8rpx", "0"]
        }),
        i: common_vendor.p({
          span: 15,
          offset: 1
        }),
        j: common_vendor.p({
          marginTop: "12rpx"
        }),
        k: common_vendor.o(viewDetails),
        l: common_vendor.p({
          radius: "32rpx",
          width: "100%",
          height: "60rpx",
          text: "\u67E5\u770B\u8BE6\u60C5",
          color: "#4D4D4D",
          background: "#FFFFFF",
          borderColor: "#CECECE",
          size: "30"
        }),
        m: common_vendor.p({
          span: 6,
          pushLeft: 10
        }),
        n: common_vendor.p({
          radius: "32rpx",
          width: "100%",
          height: "60rpx",
          text: "\u53D6\u6D88",
          color: "#4D4D4D",
          background: "#FFFFFF",
          borderColor: "#CECECE",
          size: "30"
        }),
        o: common_vendor.p({
          span: 6,
          pushLeft: 11
        }),
        p: common_vendor.p({
          title: common_vendor.unref(orderTitle),
          tag: common_vendor.unref(tag),
          size: "40",
          tagSize: "30",
          margin: ["30rpx", "32rpx"]
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/components/order_components/order_preview.vue"]]);
wx.createComponent(Component);
