import { createApp } from "vue";

/**
 * @description 自动将 ./src/components/global 下的组件注册成为全局组件
 * @param {vue} app 当前应用实例
 * @returns {void} void
 */
export const registerGlobalComponent = function (
  app: ReturnType<typeof createApp>,
): void {
  const files = require.context("./global", true, /\.(vue|ts)$/);
  files.keys().forEach((key) => {
    const config = files(key);
    const name = key.replace(/^\.\//, "").replace(/\.\w+$/, "");
    app.component(name, config.default || config);
  });
};
