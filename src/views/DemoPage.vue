<template>
  <div class="test">
    <h1>components style</h1>
    <CompositionApi />
    <ComClassComponent :count="2" />
    <p class="color-red">Test Text</p>
    <h4>{{ language }}</h4>
    <h3>{{ currentLanguageVal }}</h3>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import CompositionApi from "@/components/Com-CompositionApi.vue";
import ComClassComponent from "@/components/Com-ClassComponent.vue";
import { useStore } from "vuex";
import { StateType } from "@/@types";
import { setStoreState, dispatchAction } from "@/store/utils";

export default defineComponent({
  name: "Test",
  components: { CompositionApi, ComClassComponent },
  setup() {
    const store = useStore<StateType>();

    const language = computed(() => store.state.app.language);

    setTimeout(() => {
      setStoreState("app", "language", "EN");
    }, 1000);

    setTimeout(async () => {
      await dispatchAction("app", "changeLanguage");
    }, 3000);

    const currentLanguageVal = computed(
      () => store.getters["app/currentLangUage"] + "__computed后缀",
    );

    return {
      language,
      currentLanguageVal,
    };
  },
});
</script>
<style lang="less" scope>
.color-red {
  color: red;
}
</style>
