/**
 * 参考文档
 * 【eslint英文文档】https://eslint.org/docs/user-guide/configuring
 * 【eslint中文文档】http://eslint.cn/docs/rules/
 * 【eslint vue插件配置文档参考连接】  https://eslint.vuejs.org/rules/
 */

/**
 * 文件忽略
 * 【】让eslint跳过特定文件的检测
 * 【】通过当前工作目录下 「.eslintignore」 文件进行设置
 *    其使用的是Glob路径书写方式，与「.gitignore」的使用方法相同
 * 【】也可以在 package.json 文件中，通过 eslintIgnore 参数进行设置
 */

/**
 * 文件内局部设置
 * 【】eslint可以具体文件中设置特定代码的规则，常用于跳过某条语句的检测。
 * 【】注销全部规则，在代码前新建一行，添加注销 /* eslint-disable *\/   。如果没有恢复设置的语句，则下列全部代码都会跳过检测。
 * 【】恢复eslint，在代码前新建一行，添加注销 /* eslint-enable *\/
 * 【】指定忽略的规则，/* eslint-disable no-alert, no-console *\/
 * 【】在特定行禁用，// eslint-disable-line
 * 【】在下一行禁用，// eslint-disable-next-line
 */
module.exports = {
  root: true, // 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找。
  /**
   * 解析器
   *  http://eslint.cn/docs/user-guide/configuring#specifying-parser
   * 【】ESLint 默认使用Espree作为其解析器
   * 【】解析器必须是本地安装的一个 npm 模块。即必须按照在本地的node_module中
   * 【】解析器是用于解析js代码的，怎么去理解每一个表达式，有点C++中编译器的概念，会对js进行一些语法分析，语义分析什么的，才能判断语句符不符合规范。而不是通过简单的字符串对比。
   * 【】解析器有很多，但兼容eslint的解析器有以下几个
   *  Espree：默认解析器，一个从Esprima中分离出来的解析器，做了一些优化
   *  Esprima：js标准解析器
   *  Babel-ESLint： 一个对Babel解析器的包装，babel本身也是js解析器的一种（不然怎么能转化为兼容性代码呢？首先需要进行js解析，才能转化）。如果我们的代码需要经过babel转化，则对应使用这个解析器
   *  typescript-eslint-parser(实验) - 一个把 TypeScript 转换为 ESTree 兼容格式的解析器
   * 【】但是通常在vue项目中，并不会写在 parser 字段中，而是写在 parserOptions -&gt; parser。具体原因在 parserOptions 一栏中介绍
   */
  // parser: 'babel-eslint',

  /**
   * 解析器配置项
   *  http://eslint.cn/docs/user-guide/configuring#specifying-parser-options
   * 【】这里设置的配置项将会传递到解析器中，被解析器获取到，进行一定的处理。具体被利用到，要看解析器的源码有没有对其进行利用。这里仅仅做了参数定义，做了规定，告诉解析器的开发者可能有这些参数
   * 【】配置项目有：
   * "sourceType": "module",    
   *  指定JS代码来源的类型，script(script标签引入？) | module（es6的module模块），默认为script。为什么vue的会使用script呢？因为vue是通过babel-loader编译的，而babel编译后的代码就是script方式
   * "ecmaVersion": 6,          // 支持的ES语法版本，默认为5。注意只是语法，不包括ES的全局变量。全局变量需要在env选项中进行定义
   * "ecmaFeatures": {          // Features是特征的意思，这里用于指定要使用其他那些语言对象
       "experimentalObjectRestSpread": true,  //启用对对象的扩展
       "jsx": true,                           //启用jsx语法
       "globalReturn":true,                   //允许return在全局使用
       "impliedStrict":true                   //启用严格校验模式
     }
   */
  parserOptions: {
    /**
     * 这里出现 parser 的原因
     * 【】首先明确一点，官方说明中，parserOptions的配置参数是不包括 parser 的
     * 【】这里的写 parser 是 eslint-plugin-vue 的要求，是 eslint-plugin-vue 的自定义参数
     * 【】根据官方文档，eslint-plugin-vue 插件依赖 「vue-eslint-parser」解析器。「vue-eslint-parser」解析器，只解析 .vue 中html部分的内容，不会检测&lt;script&gt;中的JS内容。
     * 【】由于解析器只有一个，用了「vue-eslint-parser」就不能用「babel-eslint」。所以「vue-eslint-parser」的做法是，在解析器选项中，再传入一个解析器选项parser。
     *  从而在内部处理「babel-eslint」，检测&lt;script&gt;中的js代码
     * 【】所以这里出现了 parser
     * 【】相关文档地址，https://vuejs.github.io/eslint-plugin-vue/user-guide/#usage
     */
    parser: "@typescript-eslint/parser", //"babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false,
  },

  /**
   * 规则继承
   * http://eslint.cn/docs/user-guide/configuring#extending-configuration-files
   *【】可继承的方式有以下几种
   *【】eslint内置推荐规则，就只有一个，即「eslint:recommended」
   *【】可共享的配置， 是一个 npm 包，它输出一个配置对象。即通过npm安装到node_module中
   *   可共享的配置可以省略包名的前缀 eslint-config-，即实际设置安装的包名是 eslint-config-airbnb-base
   *【】从插件中获取的规则，书写规则为 「plugin:插件包名/配置名」，其中插件报名也是可以忽略「eslint-plugin-」前缀。如'plugin:vue/essential'
   *【】从配置文件中继承，即继承另外的一个配置文件，如'./node_modules/coding-standard/eslintDefaults.js'
   */
  extends: [
    "eslint:recommended", // 额外添加的规则可查看 https://vuejs.github.io/eslint-plugin-vue/rules/
    // "plugin:vue/recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],

  /**
   * 运行环境
   *  http://eslint.cn/docs/user-guide/configuring#specifying-environments
   * 【】一个环境定义了一组预定义的全局变量
   * 【】获得了特定环境的全局定义，就不会认为是开发定义的，跳过对其的定义检测。否则会被认为该变量未定义
   * 【】常见的运行环境有以下这些，更多的可查看官网
   *  browser - 浏览器环境中的全局变量。
   *  node - Node.js 全局变量和 Node.js 作用域。
   *  es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
   *  amd - 将 require() 和 define() 定义为像 amd 一样的全局变量。
   *  commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
   *  jquery - jQuery 全局变量。
   *  mongo - MongoDB 全局变量。
   *  worker - Web Workers 全局变量。
   *  serviceworker - Service Worker 全局变量。
   */
  env: {
    browser: true,
    node: true,
  },

  /**
   * eslint和prettier重合的规则有很多，如果需要每个都配置一样的话，就会很繁琐，
   * 所有eslint出了一个eslint-plugin-prettier的东西，是把prettier当作eslint的一个插件，重合的部分按照prettier的规则来
   */
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    // prettier中未配置的规则可以在这里补充
    "comma-dangle": "off", //要求或禁止尾随逗号
    "vue/multi-word-component-names": [
      "off",
      {
        ignores: [],
      },
    ],
  },

  /**
   * 插件
   * http://eslint.cn/docs/user-guide/configuring#configuring-plugins
   * 【】插件同样需要在node_module中下载
   * 【】注意插件名忽略了「eslint-plugin-」前缀，所以在package.json中，对应的项目名是「eslint-plugin-vue」
   * 【】插件的作用类似于解析器，用以扩展解析器的功能，用于检测非常规的js代码。也可能会新增一些特定的规则。
   * 【】如 eslint-plugin-vue，是为了帮助我们检测.vue文件中 &lt;template&gt; 和 &lt;script&gt; 中的js代码
   */
  // plugins: ["vue"],

  /**
   * 自定义规则
   * http://eslint.cn/docs/user-guide/configuring#configuring-rules
   * 【】基本使用方式
   *  "off" 或者0 关闭规则
   *  "warn" 或者1 将规则打开为警告（不影响退出代码）
   *  "error" 或者2 将规则打开为错误（触发时退出代码为1）
   *  如：'no-restricted-syntax': 0, // 表示关闭该规则
   * 【】如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
   *  如 'semi': ['error', 'never'], never就是额外的配置项
   */
  // rules: {
  //   "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 打包时禁止console
  //   "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 打包时禁止debugger
  //   "no-alert": process.env.NODE_ENV === "production" ? "error" : "off", // 打包时禁止alert
  //   "no-dupe-args": "error", // 禁止在函数定义或表达中出现重名参数
  //   "no-dupe-keys": "error", // 禁止在对象字面量中出现重复的键
  //   "no-extra-boolean-cast": "error", // 禁止不必要的布尔类型转换，如 !!true
  //   "no-unexpected-multiline": "error", // 禁止使用令人困惑的多行表达式
  //   "use-isnan": "error", // 要求调用 isNaN()检查 NaN
  //   "no-unsafe-negation": "error", // 禁止对关系运算符的左操作数使用否定操作符
  //   "valid-typeof": "error", // 强制 typeof 表达式与有效的字符串进行比较
  //   "block-scoped-var": "error", // 把 var 语句看作是在块级作用域范围之内
  //   "default-case": 1, // 要求 Switch 语句中有 Default 分支
  //   "no-param-reassign": "error", // 禁止对函数参数再赋值
  //   "no-redeclare": "error", // 禁止重新声明变量
  //   "require-await": "error", // 禁止使用不带 await 表达式的 async 函数
  //   "vars-on-top": "error", // 要求将变量声明放在它们作用域的顶部
  //   eqeqeq: ["error", "smart"], // 要求使用 === 和 !==
  //   "max-len": [
  //     "off",
  //     {
  //       code: 120, //140,
  //       ignoreStrings: true,
  //       ignoreTemplateLiterals: true,
  //       ignoreRegExpLiterals: true,
  //       ignorePattern: "data:image"
  //     }
  //   ],
  //   "no-plusplus": "off", //禁止使用++或者--

  //   "comma-dangle": "off", //要求或禁止尾随逗号

  //   "no-underscore-dangle": "off", //禁止悬挂下划线标识符
  //   "no-unused-expressions": "off", //不允许使用表达式
  //   "array-callback-return": "off", //在数组方法的回调中强制执行`return`语句
  //   radix: "off",
  //   "consistent-return": 1, //要求始终或永远不会指定值的返回'语句
  //   "class-methods-use-this": "off",
  //   "no-buffer-constructor": 1,
  //   "no-continue": "off",
  //   camelcase: "off",

  //   "no-use-before-define": ["error", { functions: false, classes: false }],

  //   "no-multiple-empty-lines": "off",
  //   strict: "off",
  //   "lines-between-class-members": "off",
  //   "operator-linebreak": "off",
  //   "no-else-return": "off",

  //   "object-curly-newline": "off",
  //   "operator-assignment": "off",
  //   "vue/no-mutating-props": "off",
  //   "vue/require-prop-type-constructor": "off",
  //   "vue/return-in-computed-property": "off",
  //   "vue/attribute-hyphenation": "off",
  //   "vue/no-use-v-if-with-v-for": "off",
  //   "vue/attributes-order": "off",
  //   "vue/no-unused-components": "off",
  //   "vue/require-default-prop": "off", //props是否需要默认值
  //   "vue/max-attributes-per-line": [
  //     "error",
  //     {
  //       singleline: 3,
  //       multiline: {
  //         max: 3
  //       }
  //     }
  //   ],
  //   "vue/multi-word-component-names": [
  //     "off",
  //     {
  //       ignores: []
  //     }
  //   ],
  //   // html标签需要在没有内容的元素上自动关闭 <test />
  //   "vue/html-self-closing": [
  //     "off",
  //     {
  //       html: {
  //         void: "never",
  //         normal: "always",
  //         component: "always"
  //       },
  //       svg: "always",
  //       math: "always"
  //     }
  //   ]
  // }
};
