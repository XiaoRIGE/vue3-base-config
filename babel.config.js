module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 配置ant-design-vue按需引入
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true, //todo 样式还未按需引入而是全局引入
      },
    ],
  ],
};
