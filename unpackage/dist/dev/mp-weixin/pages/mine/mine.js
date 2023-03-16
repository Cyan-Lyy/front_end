"use strict";
const common_vendor = require("../../common/vendor.js");
const Vip = () => "../../components/mine_components/vip.js";
const Property = () => "../../components/mine_components/property.js";
const FuncList = () => "../../components/mine_components/func_list.js";
const _sfc_main = {
  setup() {
    const { state, commit } = common_vendor.useStore();
    const fuck = "gnla";
    return {
      fuck,
      state,
      commit
    };
  },
  components: {
    Vip,
    Property,
    FuncList
  },
  data() {
    return {
      code: "12345",
      userName: "\u4E00\u952E\u767B\u5F55",
      vipIcon: "/static/icons/normalVip.png",
      vipText: "\u666E\u901A\u4F1A\u5458",
      progressText: "\u6210\u957F\u503C0/100",
      backDropShow: false
    };
  },
  created() {
  },
  computed: {},
  methods: {
    async login() {
      const that = this;
      common_vendor.index.login({
        provider: "weixin",
        success: function(loginRes) {
          that.code = loginRes.code;
          that.commit("SET_TOKEN", that.code);
          console.log(that.state.user.token, "token");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_avatar2 = common_vendor.resolveComponent("fui-avatar");
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  const _component_Property = common_vendor.resolveComponent("Property");
  const _component_FuncList = common_vendor.resolveComponent("FuncList");
  const _component_Vip = common_vendor.resolveComponent("Vip");
  const _easycom_fui_backdrop2 = common_vendor.resolveComponent("fui-backdrop");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_icon2 + _easycom_fui_avatar2 + _easycom_fui_col2 + _easycom_fui_text2 + _easycom_fui_row2 + _component_Property + _component_FuncList + _component_Vip + _easycom_fui_backdrop2 + _easycom_fui_button2)();
}
const _easycom_fui_icon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _easycom_fui_avatar = () => "../../node-modules/firstui-uni/firstui/fui-avatar/fui-avatar.js";
const _easycom_fui_col = () => "../../node-modules/firstui-uni/firstui/fui-col/fui-col.js";
const _easycom_fui_text = () => "../../node-modules/firstui-uni/firstui/fui-text/fui-text.js";
const _easycom_fui_row = () => "../../node-modules/firstui-uni/firstui/fui-row/fui-row.js";
const _easycom_fui_backdrop = () => "../../node-modules/firstui-uni/firstui/fui-backdrop/fui-backdrop.js";
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_avatar + _easycom_fui_col + _easycom_fui_text + _easycom_fui_row + _easycom_fui_backdrop + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "my-fill",
      color: "#fff"
    }),
    b: common_vendor.o($options.login),
    c: common_vendor.p({
      size: "large"
    }),
    d: common_vendor.p({
      span: 5,
      offset: 2
    }),
    e: common_vendor.o($options.login),
    f: common_vendor.p({
      text: $data.userName,
      size: 52,
      fontWeight: 600
    }),
    g: $data.vipIcon,
    h: common_vendor.p({
      span: 2
    }),
    i: common_vendor.p({
      text: $data.vipText,
      type: "gray",
      size: "32"
    }),
    j: common_vendor.p({
      span: 14
    }),
    k: common_vendor.p({
      gutter: 20
    }),
    l: common_vendor.o((...args) => _ctx.openVip && _ctx.openVip(...args)),
    m: common_vendor.p({
      span: 17
    }),
    n: common_vendor.p({
      marginTop: "50rpx",
      gutter: 20,
      isFlex: true,
      align: _ctx.middle
    }),
    o: $data.backDropShow,
    p: common_vendor.o(_ctx.closeVip),
    q: common_vendor.p({
      show: $data.backDropShow,
      closable: true
    }),
    r: common_vendor.p({
      background: "#fff",
      color: "#F93C3C",
      borderColor: "#64A8F2",
      width: "90%"
    }),
    s: common_vendor.p({
      span: 24,
      offset: 1
    }),
    t: common_vendor.p({
      marginTop: "10%"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/graduation project/front-end/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
