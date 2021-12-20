<!--
 * @Description  : 
 * @Author       : lihui
 * @Date         : 2021-05-25 09:36:32
 * @LastEditTime : 2021-06-01 17:07:29
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\src\components\HelloWorld.vue
-->
<template>
  <div class="hello-world">
    <div>{{ info.user.text }}</div>
    <div>{{ info.readersNumber }}</div>
    <div>{{ info.book.title }}{{ info.book.num }}</div>
    <button @click="info.addBookNum">add 1</button>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from "vue-class-component";
import { ref, watch, toRefs, reactive } from "vue";

interface ICounter {
  text?: string
  value: number
  num: number
}

function helloWorld(props, emit) {
  const readersNumber = ref(0);
  const book = reactive({ title: 'Vue 3 Guide', num: 2, });
  const { num } = toRefs(book);
  const { user } = toRefs(props);
  readersNumber.value++;

  const addBookNum = () => {
    num.value++;
  };

  // 直接侦听ref
  watch(num, (num, prevCount) => {
    // 2 0
    console.log(num, prevCount, "watch");
  },
  { deep: true });

  return {
    book,
    readersNumber,
    user,
    num,
    addBookNum
  };
}

@Options({
  components: {},
  props: {
    user: ""
  }
})
export default class HelloWorld extends Vue {
  info = setup(() => {
    return helloWorld(this.$props, this.$emit);
  });
}
</script>
