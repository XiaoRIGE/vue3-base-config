import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 是一个按需自动导入Vue/Vue Router等官方Api的插件,使用此插件后，不需要手动编写import {xxx} from xx这样的代码了，提升开发效率
import AutoImport from "unplugin-auto-import/vite";
// 直接写组件名即可，插件会帮你引入进来
import Components from "unplugin-vue-components/vite";
// UI解析库
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 打包压缩插件
// import viteCompression from "vite-plugin-compression";

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
    // 打包压缩，主要是本地gzip，如果服务器配置压缩也可以
    // viteCompression(),
  ],
  css: {
    // 指定传递给 CSS 预处理器的选项
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
  build: {
    assetsDir: "./static",
    cssCodeSplit: true, //如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中

    rollupOptions: {
      //自定义底层的 Rollup 打包配置
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        //静态资源分拆打包，会将所有node_modules中资源拆分独立文件
        // manualChunks(id) {
        //   if (id.includes("node_modules")) {
        //     return id.toString().split("node_modules/")[1].split("/")[0].toString();
        //   }
        // },
        // 拆分代码，这个就是分包，配置完后自动按需加载
        manualChunks: {
          vue: ["vue", "vue-router"],
          elementPlus: ["element-plus"],
        },
      },
    },
  },
});
