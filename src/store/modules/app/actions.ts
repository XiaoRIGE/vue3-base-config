import { setStoreState } from "../../utils";

// 模拟异步方法
const test = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("ch-zn-dispatch");
      }, 1000);
    } catch (error) {
      reject("jp");
    }
  });
};

/**
 * 当前模块的dispatch方法封装
 */
export default {
  async changeLanguage() {
    const data = await test();
    setStoreState("app", "language", data);
  },
};
