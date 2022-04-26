<template>
  <div class="test">
    <h1 @click="handleTest">DemoPage</h1>
    <CompositionApi />
    <ComClassComponent :count="2" />
    <home-outlined />
    <setting-filled />
    <smile-outlined />
    <sync-outlined spin />
    <smile-outlined :rotate="180" />
    <loading-outlined />
    <p class="color-red">Test Text</p>
    <!-- 原始标签使用icon -->
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#iconwenhao" />
    </svg>
    <!-- 组件方式使用icon -->
    <icon-font type="iconwenhao" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompositionApi from "@/components/Com-CompositionApi.vue";
import ComClassComponent from "@/components/Com-ClassComponent.vue";
import { $message } from "@/utils/index.ts";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "Test",
  components: {
    CompositionApi,
    ComClassComponent,
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  },
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
.test {
  color: @test-var;
}
</style>
