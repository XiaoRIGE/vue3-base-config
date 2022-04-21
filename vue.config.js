// 配置参考地址 https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE

const webpack = require("webpack");

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //已经被webpack4遗弃 替换方案是terser-webpack-plugin
const TerserPlugin = require("terser-webpack-plugin");

// 打包分析
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// cnd加速配置
const externals = {
  vue: "Vue",
  "vue-router": "VueRouter",
  vuex: "Vuex",
};
// CDN外链，会插入到index.html中 具体取决于公司的情况 没有就用免费的
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: [],
  },
  // 生产环境
  build: {
    // css: ["https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css"],
    css: [],
    js: [
      // "https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.global.min.js",//这里踩了个坑 在使用vue3.0.0版本后 打包后的项目一直报错Object(...) is not a function 最后通过升级vue版本解决
      "https://cdn.staticfile.org/vue/3.2.26/vue.runtime.global.prod.min.js",
      "https://cdn.staticfile.org/vue-router/4.0.0/vue-router.global.prod.min.js",
      "https://cdn.staticfile.org/vuex/4.0.0/vuex.global.prod.min.js",
    ],
  },
};

//加载path模块
const path = require("path");
//定义resolve方法，把相对路径转换成绝对路径
const resolve = (dir) => path.join(__dirname, dir);

// 根据环境配置打包规则
const IS_DEV = process.env.NODE_ENV !== "production";
console.log("IS_DEV", IS_DEV);

module.exports = {
  // 选项...
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。提示:从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略。
  lintOnSave: IS_DEV, //在生产构建时禁用 eslint-loader
  productionSourceMap: IS_DEV, //在生产构建时禁用 SourceMap
  integrity: true, //如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  // configureWebpack  如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
  configureWebpack: (config) => {
    // console.log("config", config);
    if (!IS_DEV) {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: 4, //启用多进程并发运行并设置并发运行次数
          }),
        ],
        // splitChunks 提取公共代码，防止代码被重复打包，拆分过大的js文件，合并零散的js文件
        /**
         * chunks 表示哪些代码需要优化，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为async
         * minSize: 表示在压缩前的最小模块大小，默认为30000
         * minChunks: 表示被引用次数，默认为1
         * maxAsyncRequests: 按需加载时候最大的并行请求数，默认为5
         * maxInitialRequests: 一个入口最大的并行请求数，默认为3
         * automaticNameDelimiter: 命名连接符
         * name: 拆分出来块的名字，默认由块名和hash值自动生成
         * cacheGroups: 缓存组。缓存组的属性除上面所有属性外，还有test, priority, reuseExistingChunk
         *  test: 用于控制哪些模块被这个缓存组匹配到
         *  priority: 缓存组打包的先后优先级
         *  reuseExistingChunk: 如果当前代码块包含的模块已经有了，就不在产生一个新的代码块

         */
        runtimeChunk: {
          name: "manifest",
        },
        splitChunks: {
          chunks: "all",
          minSize: 30000, // （默认值：30000）块的最小大小。
          minChunks: 1, //（默认值：1）在拆分之前共享模块的最小块数
          maxAsyncRequests: 5, //（默认值为5）按需加载时并行请求的最大数量
          maxInitialRequests: 6, // （默认值为3）入口点的最大并行请求数
          automaticNameDelimiter: "-",
          name: true,
          cacheGroups: {
            lodash: {
              name: "lodash",
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              priority: 20,
            },
            vue: {
              name: "vue",
              test: /[\\/]node_modules[\\/]vue[\\/]/,
            },
            vuex: {
              name: "vuex",
              test: /[\\/]node_modules[\\/]vuex[\\/]/,
            },
            "vuex-presistedstate": {
              name: "vuex-presistedstate",
              test: /[\\/]node_modules[\\/]vuex-presistedstate[\\/]/,
            },
            "vue-router": {
              name: "vue-router",
              test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            },
            "ant-design-vue": {
              name: "ant-design-vue",
              test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            },
            moment: {
              name: "moment",
              test: /[\\/]node_modules[\\/]moment[\\/]/,
              priority: 40,
            },
          },
        },
        // splitChunks: {
        //   chunks: "async",
        //   minSize: 30000,
        //   maxSize: 0,
        //   minChunks: 1,
        //   maxAsyncRequests: 5,
        //   maxInitialRequests: 3,
        //   automaticNameDelimiter: "~",
        //   name: true,
        //   cacheGroups: {
        //     vendors: {
        //       test: /[\\/]node_modules[\\/]/,
        //       priority: -10,
        //     },
        //     default: {
        //       minChunks: 2,
        //       priority: -20,
        //       reuseExistingChunk: true,
        //     },
        //   },
        // },
        // splitChunks: {
        //   //默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为chunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
        //   chunks: "all",
        //   minSize: 30000, //表示在压缩前的最小模块大小,默认值是30kb
        //   minChunks: 1, // 表示被引用次数，默认为1；
        //   maxAsyncRequests: 5, //所有异步请求不得超过5个
        //   maxInitialRequests: 3, //初始话并行请求不得超过3个
        //   automaticNameDelimiter: "-", //名称分隔符，默认是~
        //   name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
        //   cacheGroups: {
        //     vendor: {
        //       //第三方库抽离
        //       chunks: "all",
        //       test: /node_modules/,
        //       name: "vendor", // 打包后的文件名，任意命名
        //       minChunks: 1, //在分割之前，这个代码块最小应该被引用的次数
        //       maxInitialRequests: 5,
        //       minSize: 0, //大于0个字节
        //       priority: 100, //权重
        //     },
        //     common: {
        //       //公用模块抽离
        //       chunks: "initial",
        //       // test: /[\\/]src[\\/]js[\\/]/,
        //       name: "common",
        //       minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
        //       maxInitialRequests: 5,
        //       minSize: 0, //大于0个字节
        //       priority: 60,
        //     },
        //     styles: {
        //       //样式抽离
        //       name: "styles",
        //       test: /\.(le|c)ss$/,
        //       chunks: "all",
        //       enforce: true,
        //     },
        //   },
        // },
      };

      config.externals = externals; //配置外部拓展

      // 警告 webpack 的性能提示
      config["performance"] = {
        maxEntrypointSize: 10000000, // 入口起点的最大体积
        maxAssetSize: 30000000, // 生成文件的最大体积
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith(".js");
        },
      };
    }
  },
  // chainWebpack  是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("services", resolve("src/services"))
      .set("components", resolve("src/components"));

    /**
     * vue-cli 默认会把所有通过import()按需加载的javascript文件加上 prefetch
     * <link rel="prefetch">会在页面加载完成后，利用空闲时间提前加载获取用户未来可能会访问的内容。
     * prefetch链接会消耗宽带，如果是在移动端，而且存在大量的chunk，那么可以关掉 prefetch 链接，手动选择要提前获取的代码区块。
     * 手动选定要提前获取的代码  import(webpackPrefetch: true, './someAsyncComponent.vue')
     */
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");

    //
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */
    config.plugin("html").tap((args) => {
      if (!IS_DEV) {
        args[0].cdn = cdn.build;
      } else {
        args[0].cdn = cdn.dev;
      }
      return args;
    });

    /**
     * 优化moment 去掉国际化内容  // 忽略/moment/locale下的所有文件
     * 如果需要使用中文语言包 则手动引入即可
     * import moment from 'moment'
     * 手动引入所需要的语言包
     * import 'moment/locale/zh-cn';
     * 指定使用的语言
     * moment.locale('zh-cn');
     */
    config
      .plugin("ignore")
      .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

    if (process.env.use_analyzer) {
      config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
    }
  },
  css: {
    extract: true, //Default: 生产环境下是 true，开发环境下是 false 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码) 代替了MiniCssExtractPlugin
    sourceMap: false,
  },
  // 第三方插件选项
  pluginOptions: {},
  devServer: {
    open: true, // 自动启动浏览器
    proxy: {
      "/devApi": {
        target: "<url>", //真实接口地址
        // ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          "^/devApi": "/",
        },
      },
      "/foo": {
        target: "<other_url>",
      },
    },
  },
};
