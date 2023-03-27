"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_avatar2 = common_vendor.resolveComponent("fui-avatar");
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  const _easycom_fui_backdrop2 = common_vendor.resolveComponent("fui-backdrop");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_icon2 + _easycom_fui_avatar2 + _easycom_fui_col2 + _easycom_fui_text2 + _easycom_fui_row2 + _easycom_fui_backdrop2 + _easycom_fui_button2)();
}
const _easycom_fui_icon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _easycom_fui_avatar = () => "../../node-modules/firstui-uni/firstui/fui-avatar/fui-avatar.js";
const _easycom_fui_col = () => "../../node-modules/firstui-uni/firstui/fui-col/fui-col.js";
const _easycom_fui_text = () => "../../node-modules/firstui-uni/firstui/fui-text/fui-text.js";
const _easycom_fui_row = () => "../../node-modules/firstui-uni/firstui/fui-row/fui-row.js";
const _easycom_fui_backdrop = () => "../../node-modules/firstui-uni/firstui/fui-backdrop/fui-backdrop.js";
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_avatar + _easycom_fui_col + _easycom_fui_text + _easycom_fui_row + Property + FuncList + Vip + _easycom_fui_backdrop + _easycom_fui_button)();
}
const Vip = () => "../../components/mine_components/vip.js";
const Property = () => "../../components/mine_components/property.js";
const FuncList = () => "../../components/mine_components/func_list.js";
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const store = common_vendor.useStore();
    common_vendor.ref("");
    const backDropShow = common_vendor.ref(false);
    const token = common_vendor.computed$1(() => store.state.user.token);
    const userId = common_vendor.computed$1(() => store.state.user.userInfo.userId);
    const userName = common_vendor.computed$1(() => store.state.user.userInfo.nickname || "\u4E00\u952E\u767B\u5F55");
    const vipIcon = common_vendor.computed$1(() => store.state.user.userInfo.vipIcon || "/static/icons/normalVip.png");
    const vipText = common_vendor.computed$1(() => store.state.user.userInfo.memberType || "\u666E\u901A\u4F1A\u5458");
    common_vendor.onMounted(() => {
      if (token.value) {
        getUserInfo();
      }
    });
    const login = async () => {
      console.log(userId.value);
      if (!userId.value) {
        await common_vendor.index.login({
          provider: "weixin",
          success(loginRes) {
            store.dispatch("userLogin", loginRes.code);
            console.log(store.state.user.token, "token");
          }
        });
      }
    };
    const getUserInfo = () => {
      store.dispatch("getUserInfo");
    };
    const userLogout = () => {
      store.dispatch("userLogout");
    };
    const openVip = () => {
      backDropShow.value = true;
    };
    const closeVip = () => {
      backDropShow.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(userId)
      }, !common_vendor.unref(userId) ? {
        b: common_vendor.p({
          name: "my-fill",
          color: "#fff"
        }),
        c: common_vendor.o(login),
        d: common_vendor.p({
          size: "large"
        })
      } : {}, {
        e: common_vendor.unref(userId)
      }, common_vendor.unref(userId) ? {
        f: common_vendor.p({
          name: "my-fill",
          color: "#fff"
        }),
        g: common_vendor.p({
          size: "large"
        })
      } : {}, {
        h: common_vendor.p({
          span: 5,
          offset: 2
        }),
        i: common_vendor.o(login),
        j: common_vendor.p({
          text: common_vendor.unref(userName),
          size: 52,
          fontWeight: 600
        }),
        k: common_vendor.unref(vipIcon),
        l: common_vendor.p({
          span: 2
        }),
        m: common_vendor.p({
          text: common_vendor.unref(vipText),
          type: "gray",
          size: "32"
        }),
        n: common_vendor.p({
          span: 14
        }),
        o: common_vendor.p({
          gutter: 20
        }),
        p: common_vendor.o(openVip),
        q: common_vendor.unref(userId),
        r: common_vendor.p({
          span: 17
        }),
        s: common_vendor.p({
          marginTop: "50rpx",
          gutter: 20,
          isFlex: true,
          align: _ctx.middle
        }),
        t: backDropShow.value,
        v: common_vendor.o(closeVip),
        w: common_vendor.p({
          show: backDropShow.value,
          closable: true
        }),
        x: common_vendor.o(userLogout),
        y: common_vendor.p({
          background: "#fff",
          color: "#F93C3C",
          borderColor: "#64A8F2",
          width: "90%"
        }),
        z: common_vendor.p({
          span: 24,
          offset: 1
        }),
        A: common_vendor.unref(userId),
        B: common_vendor.p({
          marginTop: "10%"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
