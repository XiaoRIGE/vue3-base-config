/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  rules: {
    //关闭eslint检查文件名是否为驼峰命名
    "vue/multi-word-component-names": "off",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
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
