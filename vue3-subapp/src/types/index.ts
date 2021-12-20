/*
 * @Description  : 公共接口
 * @Author       : lihui
 * @Date         : 2021-05-25 14:16:52
 * @LastEditTime : 2021-05-26 14:56:53
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\src\types\index.ts
 */

interface propsITF {
  setGlobalState?: {
    ignore?: string,
    msg?: string
  },
  onGlobalStateChange?:any
  name?: string
  container?: any
}
export { propsITF };