/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-24 18:28:06
 * @LastEditTime : 2021-05-26 10:40:36
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
