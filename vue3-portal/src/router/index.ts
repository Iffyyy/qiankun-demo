/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-24 18:28:06
 * @LastEditTime : 2021-05-25 16:47:01
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // redirect: '/home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/sub-app',
  //   name: 'SubContainer',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "subContainer" */ '../views/SubContainer.vue')
  // }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;