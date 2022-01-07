<template>
  <div class="test">
    <h1>test</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Test",
  setup() {
    console.log("====");

    return {};
  },
});
</script>

<style lang="less" scoped>
.test {
}
</style>
