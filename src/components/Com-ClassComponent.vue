<template>
  <div>
    <h2>class-component 写法</h2>
    <h3>count:{{ count }}</h3>
    <button v-on:click="decrement">-</button>
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
// Define the component in class-style
// todo vue3中class-component的写法还在考量 参考issues:https://github.com/vuejs/vue-next/issues/4744(尤大的回答)
// vue 类组件 参考文档地址：https://class-component.vuejs.org/guide/props-definition.html（文档尚未更新到8.0以上）
@Options({
  props: {
    count: Number,
  },
})
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0;

  // Methods will be component methods
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
</script>
