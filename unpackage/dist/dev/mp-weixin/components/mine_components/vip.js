"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_progress = common_vendor.resolveComponent("van-progress");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_card2 = common_vendor.resolveComponent("fui-card");
  (_component_van_progress + _easycom_fui_text2 + _easycom_fui_col2 + _easycom_fui_row2 + _easycom_fui_icon2 + _easycom_fui_card2)();
}
const _easycom_fui_text = () => "../../node-modules/firstui-uni/firstui/fui-text/fui-text.js";
const _easycom_fui_col = () => "../../node-modules/firstui-uni/firstui/fui-col/fui-col.js";
const _easycom_fui_row = () => "../../node-modules/firstui-uni/firstui/fui-row/fui-row.js";
const _easycom_fui_icon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _easycom_fui_card = () => "../../node-modules/firstui-uni/firstui/fui-card/fui-card.js";
if (!Math) {
  (_easycom_fui_text + _easycom_fui_col + _easycom_fui_row + _easycom_fui_icon + _easycom_fui_card)();
}
const _sfc_main = {
  __name: "vip",
  setup(__props) {
    const store = common_vendor.useStore();
    const vipIcon = "/static/icons/VIP.png";
    const vipText = common_vendor.computed$1(() => store.state.user.userInfo.memberType);
    const currentValue = common_vendor.computed$1(() => store.state.user.userInfo.growthValue);
    const goalValue = common_vendor.computed$1(() => store.state.user.userInfo.goalValue);
    const progressText = common_vendor.computed$1(() => {
      var _a, _b;
      return "\u6210\u957F\u503C" + ((_a = currentValue == null ? void 0 : currentValue.value) != null ? _a : 0) + "/" + ((_b = goalValue == null ? void 0 : goalValue.value) != null ? _b : 0);
    });
    const percentage = common_vendor.computed$1(() => currentValue.value / goalValue.value * 100);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          percentage: common_vendor.unref(percentage),
          strokeWidth: "3px",
          showPivot: false,
          color: "#87CEFA"
        }),
        b: common_vendor.p({
          text: common_vendor.unref(progressText),
          size: 20,
          type: "gray"
        }),
        c: common_vendor.p({
          text: "| \u4F1A\u5458\u8BF4\u660E:",
          fontWeight: "700"
        }),
        d: common_vendor.p({
          span: 20,
          offset: 2
        }),
        e: common_vendor.p({
          marginTop: "5%"
        }),
        f: common_vendor.p({
          type: "gray",
          size: "30",
          text: "\u666E\u901A\u4F1A\u5458:"
        }),
        g: common_vendor.p({
          span: 6,
          offset: 2
        }),
        h: common_vendor.p({
          type: "gray",
          size: "28",
          text: "\u5728\u98DE\u626C\u7403\u9986\u5E73\u53F0\u7684\u6CE8\u518C\u7528\u6237\u5373\u4E3A\u666E\u901A\u4F1A\u5458"
        }),
        i: common_vendor.p({
          span: 14
        }),
        j: common_vendor.p({
          gutter: 10,
          marginTop: "5%"
        }),
        k: common_vendor.p({
          type: "gray",
          size: "30",
          text: "\u767D\u94F6\u4F1A\u5458:"
        }),
        l: common_vendor.p({
          span: 6,
          offset: 2
        }),
        m: common_vendor.p({
          type: "gray",
          size: "28",
          text: "\u666E\u901A\u4F1A\u5458\u6210\u957F\u503C\u7D2F\u8BA1\u8FBE\u52305000\u5373\u53EF\u6210\u4E3A\u767D\u94F6\u4F1A\u5458,\u4E0B\u5355\u4EAB\u53D79.5\u6298\u6298\u6263"
        }),
        n: common_vendor.p({
          span: 14
        }),
        o: common_vendor.p({
          marginTop: "5%"
        }),
        p: common_vendor.p({
          type: "gray",
          size: "30",
          text: "\u9EC4\u91D1\u4F1A\u5458:"
        }),
        q: common_vendor.p({
          span: 6,
          offset: 2
        }),
        r: common_vendor.p({
          type: "gray",
          size: "28",
          text: "\u4F1A\u5458\u6210\u957F\u503C\u7D2F\u8BA1\u8FBE\u523010000\u5373\u53EF\u6210\u4E3A\u9EC4\u91D1\u4F1A\u5458,\u4E0B\u5355\u4EAB\u53D79\u6298\u6298\u6263"
        }),
        s: common_vendor.p({
          span: 14
        }),
        t: common_vendor.p({
          marginTop: "5%"
        }),
        v: common_vendor.p({
          text: "| \u6210\u957F\u503C\u8BF4\u660E:",
          fontWeight: "700"
        }),
        w: common_vendor.p({
          span: 20,
          offset: 2
        }),
        x: common_vendor.p({
          marginTop: "5%"
        }),
        y: common_vendor.p({
          name: "help",
          size: "32"
        }),
        z: common_vendor.p({
          span: 2,
          offset: 2
        }),
        A: common_vendor.p({
          type: "gray",
          size: "28",
          text: "\u6BCF\u6D88\u8D39\u5B9E\u4ED81\u5143\uFF0C\u83B7\u5F971\u4E2A\u6210\u957F\u503C\u3002\u6D88\u8D39\u91D1\u989D\u4EE5\u5B9E\u4ED8\u91D1\u989D\u4E3A\u51C6\uFF0C\u6210\u957F\u503C\u5C06\u5728\u8BA2\u5355\u5B8C\u6210\u540E\u8FDB\u884C\u7ED3\u7B97"
        }),
        B: common_vendor.p({
          span: 19
        }),
        C: common_vendor.p({
          marginTop: "3%"
        }),
        D: common_vendor.p({
          src: vipIcon,
          title: common_vendor.unref(vipText),
          radius: "45rpx"
        }),
        E: common_vendor.p({
          span: 24,
          offset: 0
        }),
        F: common_vendor.p({
          marginTop: "20rpx"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/components/mine_components/vip.vue"]]);
wx.createComponent(Component);
