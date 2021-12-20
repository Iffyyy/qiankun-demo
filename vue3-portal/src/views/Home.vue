<!--
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-24 18:28:06
 * @LastEditTime : 2021-05-28 10:36:45
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-portal\src\views\Home.vue
-->
<template>
  <div class="home">
    这是主应用页面
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: {

  }
})
export default class Home extends Vue {
  setup() {

  }
}
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;

  &:hover {
    color: rgb(14, 180, 125);
  }
}
</style>
