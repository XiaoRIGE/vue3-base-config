# 项目基础代码架构说明

- 如果对你有帮助的话，欢迎star
- demo 演示地址:[暂无]  

#### 包管理工具

- 建议使用 yarn,也是 vue-cli4.0+ 默认工具(我用的是@vue/cli 4.5.13)
#### 主要用到的库

- vue 全家桶 vue3 + vue-router + vuex + typescript + ant-design-vue + less
- http 请求:axios
- ui 库:ant-design-vue
- 提交规范:git cz commitizen
- 版本更改历史: changelog（暂无）
- 文档工具:typedoc（暂无）
- 代码检查:eslint+eslint-typescript,格式化:prettier.
- 测试用例:mocha,ts-node（暂无）
- webpack 插件:）terser-webpack-plugin（压缩文件）webpack-bundle-analyzer(打包文件分析)
- 数据持久化:使用vuex-persistedstate包实现数据持久化，刷新后不会丢失保存的vuex state数据

#### 开发工具

- [x] eslint 代码检查,配置 prettier 格式化工具,使检查规则和格式化规则一致，使用eslint-plugin-prettier插件，重合的部分按照prettier的规则来，prettier中未定义的补充到eslintrc中的rule下即可
- [x] 代码提交git commit 规范配置  
- [x] 实现vue插件自动注册，只需要按规定将插件配置放在plugins目录下即可
- [x] 路由配置懒加载
- [x] 封装了一套基于modal更简单快捷的使用vuex方式
- [x] 第三方资源使用cdn方式加载
- [x] 打包时忽略moment包中最庞大的local部分，如果需要使用里边的语言包，按需引入即可（大幅降低因为moment打包文件大小）
- [x] 配置打包文件分析

#### UI 库

- [x] 添加 ant-design-vue,支持组件按需加载
- [ ] 将 UI 库部分功能如 message 添加到每个组件实例


#### 代码基础架构说明

```
|-- 根目录
    
    |-- dist 项目 build 之后的文件夹
    |-- public 项目静态资源，不经过 webpack，以及默认的模版，适合存放第三方压缩好的资源
    |-- src 主要的开发目录
    | |-- @types 项目共用的 type
    | |-- App.vue 页面渲染根节点
    | |-- main.ts 入口文件
    | |-- shims-vue.d.ts vue 文件类型的 type
    | |-- services http 请求相关
    | | |-- config  请求配置相关
    | | | |-- axios.ts 业务请求封装
    | | | |-- download.ts 文件下载方法封装
    | | | |-- plugin.ts 相关插件封装
    | | | |-- prefix.ts 静态网关头配置
    | | |-- modules  各个模块请求接口配置
    | | | |-- moduleA  A模块接口
    | | | |-- moduleB  B模块接口
    | |-- assets 存放静态资源，这个文件夹下的文件会走 webpack 压缩流程
    | |-- components
    | | |-- global 全局组件放在这里 最好按功能类型划分文件夹（配置了子文件夹一会递归全局注册）
    | | |-- index.ts 全局组件自动注册脚本
    | |-- config 全局静态配置
    | |-- layout 页面页面骨架
    | |-- plugins 存放第三方插件
    | | |-- index.ts 插件挂载入口
    | | |-- antd.ts antd组件注册入口
    | |-- router 路由
    | | |-- index.ts 路由入口
    | | |-- ... 其他模块路由配置，会自动装载
    | |-- store vuex
    | | |-- modules 多个模块
    | | |-- index.ts 自动装载模块
    | | |-- app app 模块
    | |-- styles 全局样式， ui 库主题样式
    | | |-- antd.less
    | | |-- reset.less
    | | |-- index.less
    | | |-- normalize.css 标准化各个浏览器差异
    | | |-- var.less 主题配置文件
    | |-- utils 常用函数以及其他有用工具
    | | |-- common.ts
    | |-- views 页面级组件
    | |-- Home.vue 正常页面
    | |-- Test.vue
    |-- .env.development 开发环境配置
    |-- .env.preview 测试环境配置
    |-- .env.production 生产环境配置
    |-- .eslintignore eslint 要忽略的文件夹
    |-- .eslintrc.js eslint 规则配置
    |-- .gitignore git 忽略的文件
    |-- .prettierrc.js 格式化插件配置 可以按照公司规范定制
    |-- README.md 项目说明
    |-- .cz-config 自定义git-commit配置信息
    |-- babel.config.js babel 设置 (包含Ui框架的按需引入配置)
    |-- global.d.ts 全局的 type
    |-- package.json npm 配置
    |-- tsconfig.json typescript 配置
    |-- typedoc.json 文档配置文件
    |-- vue.config.js vue-cli 脚手架配置文件
```


