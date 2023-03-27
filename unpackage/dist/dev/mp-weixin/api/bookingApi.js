"use strict";
const api_request = require("./request.js");
const url = "/api/court";
const bookingApi = {
  getList: (params) => {
    return api_request.request(`${url}/badminton`, "GET", params);
  }
};
exports.bookingApi = bookingApi;
