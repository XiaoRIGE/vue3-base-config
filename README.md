# mb-web

This template should help get you started developing with Vue 3 in Vite.

## 简介

基于 vue3+vite 脚手架实现的一个可以快速搭建中后台模板的一个项目（vue3.2+vue-router4.x+vite3+pinia）,目的是为了方便个人使用

## 功能

1.全局配置 NProgress 2.登录配置（根据 token 等信息判断路由跳转）
3.pinia 数据持久化 4.配置 404 页面

### 全局配置

#### eslint 配置

- [✓]继承 plugin:vue/vue3-recommended、eslint:recommended、@vue/eslint-config-typescript/recommended、vue/eslint-config-prettier 规则

#### prettier 配置

这个可以按照自己项目需求去进行配置，符合团队风格的才是最好的。需要防止配置效果和 eslint 规则冲突，否则会出现一保存就报 eslint 错的问题。

#### styleLint 配置

#### commitLint 配置

#### 样式配置

- [x] 自动注入全局样式
- [x] 配置全局 scss 变量
- [x] 支持自定义 UI 库的主题颜色

### 打包优化

- [✓] 配置自动导入插件，页面中使用 element-plus 无需引入就可以使用（nplugin-vue-components/vite、unplugin-auto-import/vite、）

- [x] 静态资源分包处理（目前拆分了 vue 和 element-plus）

### 下面的功能都是待完成目标

```text
- 用户管理
	- 登录（视频背景）
	- 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布 (对应serve,build)
  - dev
  - test
  - prod

- 全局功能
  - iconfont
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - Dropzone
  - Sticky
  - CountTo (to do)

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
