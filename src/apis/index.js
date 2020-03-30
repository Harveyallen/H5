import Axios from "@/assets/js/AxiosPlugin";
// const contextPath = process.env.VUE_APP_BASE_API;
import { BASE_PATH } from "../assets/js/common";

export const getNoticeDetail = params => {
  return Axios.post(
    BASE_PATH + "/ftbl-newsmgmt-service/appapi/fullnews/getDetailById",
    params,
    {
      header: {
        UID: 15565627369,
        SkipCheckSign: 1,
        SkipEncryption: 1
      }
    }
  ).then(res => res.data);
};
