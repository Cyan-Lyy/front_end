"use strict";
const api_request = require("./request.js");
const url = "/api/order";
const orderApi = {
  orderList: (pageNum) => {
    return api_request.request(`${url}/all`, "GET", pageNum);
  },
  orderDetail: (orderid) => {
    return api_request.request(`${url}/detail`, "GET", orderid);
  }
};
exports.orderApi = orderApi;
