/**
 * ajax 模块，可以将 axios 替换成 $.ajax 等
 */
import axios from "axios";
// eslint-disable-next-line
import { relogin, getToken, getUnionId, isIOS } from "@/assets/js/common"

const Axios = axios.create({
  timeout: 10000,
  // timeout: 60000,
  headers: {
    "Content-Type": "application/json"
  }
});

// http request 拦截器
Axios.interceptors.request.use(
  config => {
    config.headers.Authorization = window.token;
    config.headers.UID = window.UID;
    config.headers.SkipCheckSign = 1;
    config.headers.SkipEncryption = 1;
    config.headers.requestUUID = window.deviceId + new Date().getTime();
    config.headers.deviceId = window.deviceId;
    console.log("header config url", config.url);
    console.log("header config headers", config.headers);
    return config;
  },
  err => {
    // Indicator.close()
    return Promise.reject(err);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    // Indicator.close()
    console.log("response fail ===", error);
    if (error.response) {
      console.log("response fail response===", error.response);
    }
    // 这里处理错误的 http code
    return Promise.reject(error);
  }
);

export default Axios;
