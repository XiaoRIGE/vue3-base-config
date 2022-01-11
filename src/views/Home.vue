<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { add } from "@/utils/index";
export default defineComponent({
  components: { HelloWorld },
  setup() {
    console.log(add(1, 4));
  },
});
</script>
