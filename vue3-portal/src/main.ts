/*
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-24 18:28:06
 * @LastEditTime : 2021-05-26 11:31:14
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/utils/app-register.ts';

createApp(App).use(store).use(router).mount('#app');
