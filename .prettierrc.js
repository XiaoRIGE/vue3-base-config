module.exports = {
  printWidth: 120,
  semi: true, //句末使用分号
  singleQuote: false, //使用单引号
  tabWidth: 2,
  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  requirePragma: false, //无需顶部注释即可格式化
  insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  eslintIntegration: true, // #让prettier使用eslint的代码格式进行校验
  quoteProps: "as-needed", //仅在必需时为对象的key添加引号
  trailingComma: "all", //多行时尽可能打印尾随逗号
  arrowParens: "always", //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  htmlWhitespaceSensitivity: "ignore", //对HTML全局空白不敏感
  embeddedLanguageFormatting: "auto", //对引用代码进行格式化
  trailingComma: "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
};
