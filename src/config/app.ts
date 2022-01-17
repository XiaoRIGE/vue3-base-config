/**  跟应用全局相关的静态配置放在这里  */
import { message } from "ant-design-vue";

const AppConfig = {
  $message: message,
};
const StaticConfig = {
  MaxPageSize: 1000,
  IconfontURL: "//at.alicdn.com/t/font_2529778_on5r7wtieq9.js",
};
export { AppConfig, StaticConfig };
