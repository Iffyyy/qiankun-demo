/*
 * @Description  : 主应用注册
 * @Author       : lihui
 * @Date         : 2021-05-25 10:21:55
 * @LastEditTime : 2021-05-27 17:41:55
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\utils\app-register.ts
 */
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import { appStore } from "./app-store";
import store from "@/store";

export const startMicroAppps = () => {  
  window.hasMicroAppStart = true;
  registerMicroApps([
    {
      name: 'home',
      entry: '//localhost:9220',
      container: '#subContainer',
      activeRule: '/#/home',
      props: {
        store
      }
    },
    {
      name: 'sub-app',
      entry: '//localhost:9320',
      container: '#subContainer',
      activeRule: '/#/sub-app'
    },
  ]);
  start();
};

if (!window.hasMicroAppStart) { 
  startMicroAppps();
  appStore(initGlobalState);
}