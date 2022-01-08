<template>
  <div class="test">
    <h1>test</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "Test",
  setup() {
    let name_a = ref(0);
    let name_c = ref(1);
    let name_v = reactive({
      name: "teste",
    });
    return { name_a, name_c, name_v };
  },
});
</script>

<style lang="less" scoped>
.test {
}
</style>
