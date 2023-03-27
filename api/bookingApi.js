import request from "./request.js";

const url = "/api/court";

export default {
  getList: (params) => {
    return request(`${url}/badminton`,"GET", params);
  },
};