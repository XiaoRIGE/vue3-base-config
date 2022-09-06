/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended", // 表示引入eslint的核心功能，并且报告一些常见的共同错误
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off", // 关闭eslint检查文件名是否为驼峰命名
    "@typescript-eslint/no-explicit-any": "off", // 可以使用any
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    WeixinJSBridge: "readonly",
    ElMessage: "readonly",
    ElMessageBox: "readonly",
    ElLoading: "readonly",
  },
};
