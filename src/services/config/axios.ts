import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { message } from "ant-design-vue";
import { addPending, removePending } from "./plugin";

/**
 * @description HTTP 错误码转错误提示文本
 * @param {AxiosResponse} response Axios response object
 */
const getErrorCode2text = (response: AxiosResponse): string => {
  /** http status code */
  const code = response.status;
  /** notice text */
  let message = "Request Error";
  switch (code) {
    case 400:
      message = "Request Error";
      break;
    case 401:
      message = "Unauthorized, please login";
      break;
    case 403:
      message = "拒绝访问";
      break;
    case 404:
      message = "访问资源不存在";
      break;
    case 408:
      message = "请求超时";
      break;
    case 500:
      message = "位置错误";
      break;
    case 501:
      message = "承载服务未实现";
      break;
    case 502:
      message = "网关错误";
      break;
    case 503:
      message = "服务暂不可用";
      break;
    case 504:
      message = "网关超时";
      break;
    case 505:
      message = "暂不支持的 HTTP 版本";
      break;
    default:
      message = "位置错误";
  }
  return message;
};

// 将blob对象转化为json（文件类型调用ajax 取后端的返回值做特殊处理）
const fileToJson = (file: any): any => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (res: any) => {
      const { result } = res.target; // 得到字符串
      const data = JSON.parse(result); // 解析成json对象
      resolve(data);
    }; // 成功回调
    reader.onerror = (err) => {
      reject(err);
    }; // 失败回调
    reader.readAsText(new Blob([file]), "utf-8"); // 按照utf-8编码解析
  });
};

/**
 * @returns  {AxiosResponse} result
 * @tutorial see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 60000,
});

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
service.interceptors.request.use(async (config: AxiosRequestConfig) => {
  removePending(config); // 在请求开始前，对之前的请求做检查取消操作
  addPending(config); // 将当前请求添加到 pending 中
  return config;
});

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
service.interceptors.response.use(
  /** 请求有响应 */
  async (response: AxiosResponse) => {
    removePending(response); // 在请求结束后，移除本次请求信息
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      const __text = getErrorCode2text(response) || "请求失败，请稍后重试";
      console.log("__text", __text);
      message.error(__text);
      return Promise.reject(new Error(__text));
    }
  },
  /** 请求无响应 */
  async (error: AxiosError) => {
    if (Axios.isCancel(error)) {
      // 手动取消的
      console.log(`repeated request: ${error.message}`);
    } else {
      // 请求错误的
      let __emsg: string = error.message || "请求失败，请稍后重试";

      if (error?.message) {
        __emsg = error.message;
      }

      if (error?.response) {
        __emsg = error.response.data.message
          ? error.response.data.message
          : error.response.data.data;
      }
      if (error?.response?.status === 401) {
        // if (router.currentRoute.value.path !== "/login") {
        // message.info("登录凭证已过期，请重新登录");
        // router.push("/login");
        // }
        return Promise.reject(new Error("401"));
      }

      if (__emsg && __emsg.indexOf("timeout") >= 0) {
        __emsg = "请求超时，请检查网络后重试";
      }

      // 文件导出错误提示
      if (error?.response?.config.responseType === "blob") {
        const data = await fileToJson(error.response.data);
        message.error(data.message);
        return Promise.reject(data);
      }

      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(error);
  },
);

export default service;
