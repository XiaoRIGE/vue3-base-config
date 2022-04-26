<template>
  <div class="test">
    <h1 @click="handleTest">DemoPage</h1>
    <CompositionApi />
    <ComClassComponent :count="2" />
    <p class="color-red">Test Text</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompositionApi from "@/components/Com-CompositionApi.vue";
import ComClassComponent from "@/components/Com-ClassComponent.vue";
import { $message } from "@/utils/index.ts";

export default defineComponent({
  name: "Test",
  components: { CompositionApi, ComClassComponent },
  setup() {
    const handleTest = () => {
      $message.success("------");
    };
    return {
      handleTest,
    };
  },
});
</script>
<style lang="less" scope>
.color-red {
  color: red;
}
</style>
