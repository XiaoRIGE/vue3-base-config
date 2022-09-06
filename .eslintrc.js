/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    // "plugin:vue/vue3-essential", // eslint最基本的配置 （参考https://eslint.vuejs.org/user-guide/#usage）
    "plugin:vue/vue3-recommended", // 加上大大提高代码可读性和/或开发体验的规则，加上强制执行主观社区默认值的规则
    "eslint:recommended", // 表示引入eslint的核心功能，并且报告一些常见的共同错误
    "@vue/eslint-config-typescript/recommended", // 参考https://github.com/vuejs/eslint-config-typescript
    "@vue/eslint-config-prettier",
  ],
  // 不满足需求的可以自定义
  rules: {
    "vue/multi-word-component-names": "off", // 关闭eslint检查文件名是否为驼峰命名
    "@typescript-eslint/no-explicit-any": "off", // 可以使用any
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
