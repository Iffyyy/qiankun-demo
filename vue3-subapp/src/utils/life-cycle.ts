/*
 * @Description  : 应用生命周期
 * @Author       : lihui
 * @Date         : 2021-05-25 13:30:25
 * @LastEditTime : 2021-06-01 14:59:52
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\src\utils\life-cycle.ts
 */
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { appStore } from '@/utils/app-store';
import { routes } from '../router';
import App from '../App.vue';
import { propsITF } from "@/types/index";
let router = null;
let instance:any = null;

const lifeCycle = () => {
  return {
    /**
     * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
     * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
     */
    async bootstrap() {
      console.log('sub app bootstraped');
    },
    /**
     * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */
    async mount(props:propsITF) {
      // 注册应用间通信
      appStore(props);
      // 注册微应用实例化函数
      render(props);
    },
    /**
     * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
     */
    async unmount() {
      if (instance) {
        // instance.$destroy();
        // instance.unmount();
        instance.$el.innerHtml = '';
        instance = null;
      }
      router = null;
    },    
    /**
     * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
     */
    async update(props:propsITF) {
      console.log('update props', props);
    }
  };
};

/**
 * @description  子应用实例化函数
 * @param {Object} props  qiankun将用户添加信息和自带信息整合，通过props传给子应用
 */
const render = (props:propsITF = {}) => {
  const { container } = props;
  // instance = new Vue({
  //   router,
  //   store,
  //   render: h => h(App)
  // }).$mount(container ? container.querySelector('#app') : '#app')
  router = createRouter({
    // window.__POWERED_BY_QIANKUN__ ? '/sub-app/' : '/'
    history: createWebHashHistory(),
    routes
  });
  
  instance = createApp(App).use(router).mount(container ? container.querySelector('#app') : '#app');
};
export { lifeCycle, render };
