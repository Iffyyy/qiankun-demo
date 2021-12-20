import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/sub-app'
  },
  {
    path: '/sub-app',
    name: 'Home',
    component: Home
  },
  {
    path: '/sub-about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
