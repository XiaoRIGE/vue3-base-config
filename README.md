# 项目基础代码架构说明

- 如果对你有帮助的话，欢迎star
- demo 演示地址:[暂无]  

#### 包管理工具

- 建议使用 yarn,也是 vue-cli4.0+ 默认工具(我用的是@vue/cli 4.5.13)
#### 主要用到的库

- vue 全家桶 vue3 + vue-router + vuex + typescript
- http 请求:axios
- ui 库:ant-design-vue（暂定）.
- 提交规范:git cz commitizen
- 版本更改历史: changelog（暂无）
- 文档工具:typedoc（暂无）
- 代码检查:eslint+eslint-typescript（暂无）,格式化:prettier.
- 测试用例:mocha,ts-node（暂无）
- webpack 插件:style-resources-loader（暂无） terser-webpack-plugin（压缩文件）

#### 开发工具

- [x] eslint 代码检查,配置 prettier 格式化工具,使检查规则和格式化规则一致，使用eslint-plugin-prettier插件，重合的部分按照prettier的规则来，prettier中未定义的补充到eslintrc中的rule下即可
- [x] 代码提交git commit 规范配置  

#### 代码基础架构说明

```
|-- 根目录
    |-- @types 项目共用的 type
    |-- dist 项目 build 之后的文件夹
    |-- docs 文档生成的根目录位置
    |-- public 项目静态资源，不经过 webpack，以及默认的模版，适合存放第三方压缩好的资源
    |-- src 主要的开发目录
    | |-- App.vue 页面渲染根节点
    | |-- main.ts 入口文件
    | |-- shims-vue.d.ts vue 文件类型的 type
    | |-- api http 请求相关
    | | |-- apiList.ts api 接口列表
    | | |-- axios.ts 业务请求封装
    | | |-- editor.ts 其他业务封装
    | | |-- user.ts api 请求模块
    | |-- assets 存放静态资源，这个文件夹下的文件会走 webpack 压缩流程
    | |-- components
    | | |-- index.ts 自动注册脚本
    | | |-- global 自动注册的全局组件
    | | |-- ...其他非全局注册的模块
    | |-- config 全局静态配置，不可更改项
    | |-- layout 页面页面骨架
    | |-- plugins 存放第三方插件
    | | |-- index.ts 插件挂载入口
    | |-- router 路由
    | | |-- index.ts 路由入口
    | |-- store vuex
    | | |-- modules 多个模块
    | | |-- index.ts 自动装载模块
    | | |-- app app 模块
    | |-- styles 全局样式，一句 ui 库主题样式
    | | |-- \_variables.less
    | | |-- test.less
    | |-- utils 常用函数以及其他有用工具
    | | |-- common.ts
    | |-- views 页面级组件
    | |-- Home.vue 正常页面
    | |-- test 组件测试页面
    | |-- Test.vue
    |-- tests 测试用例
    |-- api api 模块
    |-- unit 单元测试
    |-- .env.development 开发环境配置
    |-- .env.preview 测试环境配置
    |-- .env.production 生产环境配置
    |-- .eslintignore eslint 要忽略的文件夹
    |-- .eslintrc.js eslint 规则配置
    |-- .gitignore git 忽略的文件
    |-- .prettierrc.js 格式化插件配置 可以按照公司规范定制
    |-- README.md 项目说明
    |-- .cz-config 自定义git-commit配置信息
    |-- babel.config.js babel 设置
    |-- global.d.ts 全局的 type
    |-- package.json npm 配置
    |-- tsconfig.json typescript 配置
    |-- typedoc.json 文档配置文件
    |-- vue.config.js vue-cli 脚手架配置文件
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
