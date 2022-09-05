<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
// import Layout from "./layout/index.vue";
// import Card from "./components/Card.vue";
// element全局配置 size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级
// const zIndex = 3000;
// const size = "small";
</script>

<template>
  <!-- <el-config-provider :size="size" :z-index="zIndex">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <Card />
    <Layout />
    <RouterView />
  </el-config-provider> -->
  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
} */
</style>
