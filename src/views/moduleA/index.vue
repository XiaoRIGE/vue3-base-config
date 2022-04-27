<template>
  <div class="test">
    <h1>test</h1>
    <Component-A />
    <Component-B />
    <Component-C />
  </div>
</template>

<script lang="ts">
const path = require("path");
const files = require.context("./components", false, /\.vue$/);
const modules: any = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});

import { defineComponent } from "vue";
export default defineComponent({
  name: "test",
  components: modules,
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.test {
}
</style>
