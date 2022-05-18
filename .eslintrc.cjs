/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "prettier/prettier": "error",
    // 更多规则可以在这里定义
    "no-console": "off",
    "comma-dangle": "off", //要求或禁止尾随逗号
    "vue/multi-word-component-names": [
      "off",
      {
        ignores: [],
      },
    ],
  },
};
