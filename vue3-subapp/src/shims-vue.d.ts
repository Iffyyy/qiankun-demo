/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-25 09:36:32
 * @LastEditTime : 2021-05-25 14:31:16
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface Window {
  __POWERED_BY_QIANKUN__: any,
  $: any,
  __webpack_public_path__: any,
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any
}