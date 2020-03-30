const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// mock数据
// const mockData = require('./mock/test.json');

module.exports = {
  // 基本路径
  publicPath: "./",

  // 输出文件目录
  // outputDir: 'dist',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 单/多页面
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "广州队APP"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // stylus: {
      //     // @/ 是 src/ 的别名
      //     // 所以这里假设你有 `src/variables.stylus` 这个文件, 不过目前测试无效
      //     data: `@import "~@/style/variables.styl";`
      //   }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  devServer: {
    // 端口
    port: 3000,

    // 配置代理
    proxy: {
      // "^/ftbl-newsmgmt-service": {
      //   target: "10.101.72.208:9027/",
      //   ws: true,
      //   changeOrigin: true
      //   // pathRewrite: {
      //   //   "^api": ""
      //   // }
      // },
      "^/data": {
        target: "http://localhost:3000"
      },
      "^/test": {
        target: "192.168.8.52:9066",
        changeOrigin: true,
        pathRewrite: {
          "^/test": ""
        }
      }
    }
  },
  // vue-cli内部webpack配置
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("layout", resolve("src/layout"))
      .set("base", resolve("src/base"))
      .set("static", resolve("src/static"));
    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }

    // 修改静态资源打包方式，下例为超过10k才用文件导入的方式，否则为base64.默认为4k
    // config.module
    // .rule('images')
    //     .use('url-loader')
    //     .loader('url-loader')
    //     .tap(options => Object.assign(options, { limit: 10240 }))
  },
  // webpack配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      console.log(config);
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
};
