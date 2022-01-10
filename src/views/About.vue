<template>
  <div class="test">
    <h1>components style</h1>
    <CompositionApi />
    <ComClassComponent :count="2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import CompositionApi from "@/components/Com-CompositionApi.vue";
import ComClassComponent from "@/components/Com-ClassComponent.vue";

export default defineComponent({
  name: "Test",
  components: { CompositionApi, ComClassComponent },
  setup() {
    let name_a = ref(0);
    let name_c = ref(1);
    let name_v = reactive({
      name: "test",
    });
    return { name_a, name_c, name_v };
  },
});
</script>
