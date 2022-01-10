<template>
  <div class="composition">
    <h2>composition-api 写法</h2>
    <h3>count:{{ count }}</h3>
    <button @click="handleAdd">加</button>
    <button @click="handleReduce">减</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "composition",
  setup() {
    const count = ref(0);
    const handleAdd = () => {
      count.value += 1;
    };
    const handleReduce = () => {
      count.value -= 1;
    };
    return { count, handleAdd, handleReduce };
  },
});
</script>

<style lang="less" scoped>
.composition {
}
</style>
