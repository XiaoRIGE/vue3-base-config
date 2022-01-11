<template>
  <div class="test">
    <h1>components style</h1>
    <CompositionApi />
    <ComClassComponent :count="2" />
    <p class="color-red">Test Text</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import CompositionApi from "@/components/Com-CompositionApi.vue";
import ComClassComponent from "@/components/Com-ClassComponent.vue";
import { add } from "@/utils/index";

export default defineComponent({
  name: "Test",
  components: { CompositionApi, ComClassComponent },
  setup() {
    console.log(add(1, 4));
    let name_a = ref(0);
    let name_c = ref(1);
    let name_v = reactive({
      name: "test",
    });
    return { name_a, name_c, name_v };
  },
});
</script>
<style lang="less" scope>
.color-red {
  color: red;
}
</style>
