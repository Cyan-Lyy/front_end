"use strict";
const common_vendor = require("../../common/vendor.js");
const api_bookingApi = require("../../api/bookingApi.js");
const utils_utils = require("../../utils/utils.js");
require("../../api/request.js");
require("../../store/index.js");
require("../../store/user.js");
require("../../api/loginApi.js");
require("../../utils/token.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_submit_bar = common_vendor.resolveComponent("van-submit-bar");
  (_component_van_icon + _component_van_submit_bar)();
}
const _sfc_main = {
  __name: "bookPlace",
  setup(__props) {
    common_vendor.onMounted(() => {
      reserveTime.value = utils_utils.formatDate(new Date(), "yyyy-MM-DD");
      getData();
    });
    let reserveTime = common_vendor.ref("");
    let dateIndex = common_vendor.ref(0);
    const reserveDate = common_vendor.ref([]);
    const place = common_vendor.ref([]);
    const price = common_vendor.ref([]);
    const totalAmount = common_vendor.ref(0);
    const getData = () => {
      const date = reserveTime.value;
      api_bookingApi.bookingApi.getList({
        date
      }).then((res) => {
        reserveDate.value = res.time.map((v) => formatTime(v.slice(5)));
        console.log(utils_utils.formatDate(new Date(), "MM-DD"));
        reserveDate.value.forEach((item) => {
          item[0] = item[0].replace(/月/, "/");
        });
        place.value = res.courts;
        price.value = res.price;
        console.log(price.value);
      });
    };
    const formatTime = (str) => {
      let match = str.match(/(\d{2})月(\d{2})日(.+)/);
      if (match) {
        let month = match[1];
        let day = match[2];
        let week = match[3];
        let date = `${month}/${day}`;
        let result = [date, week];
        return result;
      }
    };
    const chooseDate = (e, i) => {
      reserveTime.value = dateParma(e[0]);
      dateIndex.value = i;
      console.log(submitForm.value, "before");
      getData();
      submitForm.value = [];
      chooseForm.value = [];
      totalAmount.value = 0;
      console.log(submitForm.value, "after");
      calcMoney(...Object.values(submitData[i]));
    };
    const dateParma = (str) => {
      const year = reserveTime.value.slice(0, 4);
      let match = str.match(/(\d{2})\/(\d{2})/);
      if (match) {
        let month = match[1];
        let day = match[2];
        let result = `${year}-${month}-${day}`;
        return result;
      }
    };
    const allTime = common_vendor.ref([
      {
        id: 1,
        value: ["08:00"],
        time: "08:00 - 09:00"
      },
      {
        id: 2,
        value: ["09:00"],
        time: "09:00 - 10:00"
      },
      {
        id: 3,
        value: ["10:00"],
        time: "10:00 - 11:00"
      },
      {
        id: 4,
        value: ["11:00"],
        time: "11:00 - 12:00"
      },
      {
        id: 5,
        value: ["14:00"],
        time: "14:00 - 15:00"
      },
      {
        id: 6,
        value: ["15:00"],
        time: "15:00 - 16:00"
      },
      {
        id: 7,
        value: ["16:00"],
        time: "16:00 - 17:00"
      },
      {
        id: 8,
        value: ["17:00"],
        time: "17:00 - 18:00"
      },
      {
        id: 9,
        value: ["18:00"],
        time: "18:00 - 19:00"
      },
      {
        id: 10,
        value: ["19:00"],
        time: "19:00 - 20:00"
      },
      {
        id: 11,
        value: ["20:00"],
        time: "20:00 - 21:00"
      },
      {
        id: 12,
        value: ["21:00"],
        time: "21:00 - 22:00"
      },
      {
        id: 13,
        value: ["22:00"],
        time: "22:00 - 23:00"
      },
      {
        id: 14,
        value: ["23:00"],
        time: "23:00 - 24:00"
      }
    ]);
    const chooseTime = (e, v) => {
      const arr = [v.courtId, e.id];
      if (!chooseForm.value.some((s) => utils_utils.isEqual(arr, s))) {
        chooseForm.value.push(arr);
      } else {
        chooseForm.value.splice(chooseForm.value.findIndex((f) => utils_utils.isEqual(arr, f)), 1);
      }
      const obj = {};
      obj[v.courtId] = [e.value];
      let placeList = [];
      placeList = submitForm.map((v2) => Object.keys(v2)).flat().map((item) => Number(item));
      console.log(placeList, "placeList");
      if (placeList.includes(v.courtId)) {
        submitForm.forEach((item) => {
          if (item[v.courtId]) {
            if (item[v.courtId].some((s) => utils_utils.isEqual(e.value, s))) {
              item[v.courtId].splice(item[v.courtId].findIndex((f) => utils_utils.isEqual(f, e.value)), 1);
            } else {
              item[v.courtId] = [...item[v.courtId], e.value];
            }
          }
        });
      } else {
        submitForm.push(obj);
      }
      console.log("submitForm:", JSON.stringify(submitForm));
      submit();
    };
    const chooseForm = common_vendor.ref([]);
    const submitForm = common_vendor.reactive([]);
    const filterActived = (courtId, id) => {
      const arr = [courtId, id];
      return chooseForm.value.some((s) => utils_utils.isEqual(arr, s));
    };
    const submit = () => {
      let submitData2 = [...submitForm];
      for (var i = 0; i < submitData2.length; i++) {
        submitData2[i] = fuck(submitData2[i]);
      }
      submitData2 = submitData2.filter((f) => filterData(f));
      totalAmount.value = 0;
      for (var i = 0; i < submitData2.length; i++) {
        totalAmount.value += calcMoney(...Object.values(submitData2[i]));
      }
    };
    const calcMoney = (chooseArr) => {
      let arr = [];
      for (var i = 1; i <= 24; i++) {
        arr.push(0);
      }
      chooseArr = chooseArr.map((v) => Number(v.split(":")[0]));
      for (var i = 0; i < chooseArr.length; i++) {
        arr[chooseArr[i]] = 1;
      }
      return calculateOneDayPrice(arr, price.value);
    };
    const calculateOneDayPrice = (timeSlot, priceList) => {
      let oneDayPrice = 0;
      let morningPrice = priceList[0].split(",");
      let morningCount = 0;
      let morning = [];
      for (let i = 8; i < 12; i++) {
        if (timeSlot[i] === 1) {
          morningCount++;
        } else {
          if (morningCount > 0) {
            morning.push(morningCount);
            morningCount = 0;
          }
        }
      }
      if (morningCount > 0) {
        morning.push(morningCount);
      }
      morning.forEach((count) => {
        oneDayPrice += Math.round(parseFloat(morningPrice[count - 1]) * 100);
      });
      let afternoonPrice = priceList[1].split(",");
      let afternoonCount = 0;
      let afternoon = [];
      for (let i = 14; i < 18; i++) {
        if (timeSlot[i] === 1) {
          afternoonCount++;
        } else {
          if (afternoonCount > 0) {
            afternoon.push(afternoonCount);
            afternoonCount = 0;
          }
        }
      }
      if (afternoonCount > 0) {
        afternoon.push(afternoonCount);
      }
      afternoon.forEach((count) => {
        oneDayPrice += Math.round(parseFloat(afternoonPrice[count - 1]) * 100);
      });
      let nightPrice = priceList[2].split(",");
      let nightCount = 0;
      let night = [];
      for (let i = 18; i < 24; i++) {
        if (timeSlot[i] === 1) {
          nightCount++;
        } else {
          if (nightCount > 0) {
            night.push(nightCount);
            nightCount = 0;
          }
        }
      }
      if (nightCount > 0) {
        night.push(nightCount);
      }
      night.forEach((count) => {
        oneDayPrice += Math.round(parseFloat(nightPrice[count - 1]) * 100);
      });
      return oneDayPrice;
    };
    const filterData = (obj) => {
      const values = Object.values(obj);
      if (!values.length) {
        return false;
      } else {
        return true;
      }
    };
    const fuck = (obj) => {
      const newObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = Array.from(new Set(obj[key].flat()));
        }
        if (!obj[key].length) {
          delete newObj[key];
        }
      }
      return newObj;
    };
    const onSubmit = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "clock-o"
        }),
        b: common_vendor.f(reserveDate.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item[1]),
            b: common_vendor.t(item[0]),
            c: common_vendor.n(common_vendor.unref(dateIndex) === index ? "activeItem" : ""),
            d: index,
            e: common_vendor.o(($event) => chooseDate(item, index), index)
          };
        }),
        c: common_vendor.f(place.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.courtName),
            b: common_vendor.f(allTime.value, (timeItem, index, i1) => {
              return {
                a: common_vendor.t(timeItem.time),
                b: common_vendor.o(($event) => chooseTime(timeItem, item), timeItem.id),
                c: timeItem.id,
                d: common_vendor.n(filterActived(item.courtId, timeItem.id) ? "actived" : "")
              };
            }),
            c: item.courtId
          };
        }),
        d: common_vendor.o(onSubmit),
        e: common_vendor.p({
          price: totalAmount.value,
          buttonText: "\u786E\u8BA4",
          tip: "\u9009\u62E9\u8FDE\u7EED\u7684\u65F6\u6BB5\u4EF7\u683C\u66F4\u4F4E",
          tipIcon: "info-o",
          placeholder: "true"
        }),
        f: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/graduation project/front-end/pages/bookPlace/bookPlace.vue"]]);
wx.createPage(MiniProgramPage);
