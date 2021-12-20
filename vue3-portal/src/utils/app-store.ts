/*
 * @Description  : 应用通信
 * @Author       : lihui
 * @Date         : 2021-05-26 13:58:11
 * @LastEditTime : 2021-05-27 17:35:43
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\utils\app-store.ts
 */
import { MicroAppStateActions } from "qiankun";
import store from '@/store';
export const appStore = (initGlobalState:((state?: Record<string, any>) => MicroAppStateActions)) => {
  const { onGlobalStateChange, setGlobalState } = initGlobalState({
    data: store.state.list
  });

  /**
   * 监听数据变动
   */
  onGlobalStateChange((value, prev) => {
    console.log(value, prev, 11);
    if (value.appsRefresh) {
      // eslint-disable-next-line no-unused-expressions
      window?.location?.reload?.();
    }
  });

  /**
     * @description  改变数据并向所有应用广播
     */
  setGlobalState({
    ignore: "portal",
    msg: "来自门户设定的用户消息",
  });
};