<!--
 * @Description: app 布局入口
-->
<template>
  <Navbar />
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  font-size: 0px;
  overflow: hidden;
  background-color: #001529 !important;
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  // margin-left: $sideBarWidth;
  position: relative;
}

:deep(.el-menu) {
  .is-active {
    background: #08979c;
  }
}
</style>
