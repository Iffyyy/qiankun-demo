/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-25 09:41:45
 * @LastEditTime : 2021-05-26 11:31:02
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\vue.config.js
 */

module.exports = {
  devServer: {
    port: 9520
  },
  // 自定义webpack配置
  configureWebpack: {    
    // entry: {
    //   polyfill: [ 'whatwg-fetch','custom-event-polyfill','core-js/stable/promise','core-js/stable/symbol','core-js/stable/string/starts-with','core-js/web/url'],
    // },
    // optimization: {
    //   splitChunks: {
    //     chunks(chunk) {
    //       return chunk.name !== 'polyfill';
    //     },
    //   }
    // },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: './src/index.ejs',
    //     minify: {
    //       removeComments: true,
    //       collapseWhitespace: true,
    //     },
    //     inject: false,
    //   }),
    // ],
  },
};