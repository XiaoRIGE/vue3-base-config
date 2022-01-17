import Axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();

/**
 * @description: 添加请求
 * @param {AxiosRequestConfig} config
 * @return {*}
 */
export const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join("&");
  config.cancelToken =
    config.cancelToken ||
    new Axios.CancelToken((cancelFn: Function) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancelFn); // 让请求的url和对应的取消请求方法一一对应，在需要时执行
      }
    });
};

/**
 * @description: 移除请求
 * @param {AxiosRequestConfig} config
 * @return {*}
 */
export const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join("&");
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};

/**
 * @description: 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};
