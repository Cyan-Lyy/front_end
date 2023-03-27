"use strict";
const common_vendor = require("../common/vendor.js");
const api_orderApi = require("../api/orderApi.js");
if (!Array) {
  const _component_uni_steps = common_vendor.resolveComponent("uni-steps");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_uni_steps + _component_uni_section)();
}
const _sfc_main = {
  __name: "orderDetail",
  setup(__props) {
    common_vendor.onLoad((options) => {
      orderId.value = options.orderId;
      console.log(orderId.value, 999);
    });
    common_vendor.onMounted(() => {
      getDetail();
    });
    common_vendor.useRouter();
    common_vendor.useRoute();
    const orderId = common_vendor.ref(null);
    const orderDetail = common_vendor.ref({});
    const getDetail = () => {
      api_orderApi.orderApi.orderDetail({
        orderid: orderId.value
      }).then((res) => {
        console.log(res.data);
        orderDetail.value = res.orderDetail;
      });
    };
    const list1 = [{
      title: "\u4E8B\u4EF61"
    }, {
      title: "\u4E8B\u4EF62"
    }, {
      title: "\u4E8B\u4EF63"
    }];
    const active = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          options: list1,
          active: active.value
        }),
        b: common_vendor.p({
          title: "\u57FA\u672C\u7528\u6CD5",
          type: "line",
          padding: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/pages/orderDetail/orderDetail.vue"]]);
const routes = [
  {
    path: "/orderDetail",
    name: "orderDetail",
    component: MiniProgramPage
  }
];
exports.MiniProgramPage = MiniProgramPage;
exports.routes = routes;
