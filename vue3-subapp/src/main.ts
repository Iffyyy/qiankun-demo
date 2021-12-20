/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-25 09:36:32
 * @LastEditTime : 2021-05-25 17:09:39
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\src\main.ts
 */
import { lifeCycle, render } from "./utils/life-cycle";
import VfUI from 'vfox-ui';

// createApp(App).use(store).mount('#app');

/**
 *  @description  单独环境直接实例化vue
 */
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
__qiankun__ || render();
 
/**
  *  @description  导出微应用生命周期
  */
const { bootstrap, mount, unmount } = lifeCycle();
export { bootstrap, mount, unmount };