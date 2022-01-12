module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 配置ant-design-vue按需引入
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
};
