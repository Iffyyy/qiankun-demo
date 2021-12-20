/*
 * @Description  :
 * @Author       : lihui
 * @Date         : 2021-05-25 09:41:45
 * @LastEditTime : 2021-07-08 10:39:45
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\vue.config.js
 */
// import HtmlTagsPlugin from "html-webpack-tags-plugin";// 动态垫片
const path = require("path");
const packageName = require('./package.json').name;
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 9521,    
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`
    },
    module: {      
      rules: [{
        exclude: /node_modules/,
        include: /src/,
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { cacheDirectory: true }
        }]
      }],
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        "@": resolve("src"),
      },
    },
    optimization: {
      runtimeChunk: { name: "manifest" }, // 抽离WebpackRuntime函数
      splitChunks: {
        cacheGroups: {
          common: {
            minChunks: 2,
            name: "common",
            priority: 5,
            reuseExistingChunk: true, // 重用已存在代码块
            test: resolve("src")
          },
          vendor: {
            chunks: "initial", // 代码分割类型
            name: "vendor", // 代码块名称
            priority: 10, // 优先级
            test: /node_modules/ // 校验文件正则表达式
          }
        }, // 缓存组
        chunks: "all" // 代码分割类型：all全部模块，async异步模块，initial入口模块
      } // 代码块分割
    },
    plugins: [
      // new HtmlTagsPlugin({
      //   append: false, // 在生成资源后插入
      //   publicPath: false, // 使用公共路径
      //   tags: ["https://polyfill.alicdn.com/polyfill.min.js"] // 资源路径
      // })
    ]

  }
};
