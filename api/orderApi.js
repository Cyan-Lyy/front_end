import request from "./request.js";

const url = "/api/order";

export default {
  orderList: (pageNum) => {
    return request(`${url}/all`,"GET", pageNum);
  },
  orderDetail: (orderid) => {
	  return request(`${url}/detail`, "GET", orderid)
  }
};