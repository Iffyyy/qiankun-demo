<!--
 * @Description  : app
 * @Author       : lihui
 * @Date         : 2021-05-24 18:28:06
 * @LastEditTime : 2021-05-25 16:58:46
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\App.vue
-->
<template>
  <div id="root">
    <router-link to="/home">Home</router-link> |
    <router-link to="/sub-app">subApp</router-link>
    <router-view />
    <div id="subContainer"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#root {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
