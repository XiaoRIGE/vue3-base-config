// 此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写
// 规则配置参考地址 https://prettier.io/docs/en/options.htm
module.exports = {
  singleQuote: false, //使用单引号
  htmlWhitespaceSensitivity: "ignore", //对HTML全局空白不敏感
  trailingComma: "none", //多行时尽可能打印尾随逗号
  proseWrap: "never", //不要包装散文
  trailingComma: "all", //尽可能使用尾随逗号
  printWidth: 80, //单行长度
  tabWidth: 2, //缩进长度

  // useTabs: false, //使用空格代替tab缩进
  // semi: true, //句末使用分号
  // quoteProps: "as-needed", //仅在必需时为对象的key添加引号
  // jsxSingleQuote: true, // jsx中使用单引号
  // trailingComma: false, //多行时尽可能打印尾随逗号
  // bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  // jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  // arrowParens: "always", //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  // requirePragma: false, //无需顶部注释即可格式化
  // insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  // vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
  // endOfLine: "lf", //结束行形式
  // embeddedLanguageFormatting: "auto", //对引用代码进行格式化
};
