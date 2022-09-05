import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 是一个按需自动导入Vue/Vue Router等官方Api的插件,使用此插件后，不需要手动编写import {xxx} from xx这样的代码了，提升开发效率
import AutoImport from "unplugin-auto-import/vite";
// 直接写组件名即可，插件会帮你引入进来
import Components from "unplugin-vue-components/vite";
// UI解析库
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 此处修改为要被预处理的scss文件地址
        additionalData: '@import "./src/styles/_variables.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
