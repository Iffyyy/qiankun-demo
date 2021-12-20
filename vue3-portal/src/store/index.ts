/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-24 18:28:06
 * @LastEditTime : 2021-05-27 17:42:08
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\store\index.ts
 */
import { createStore } from 'vuex';

export default createStore({
  state: {
    list: [{
      text: '这是列表项1'
    }, {
      text: '这是列表项2'
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
