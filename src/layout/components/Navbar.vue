<!-- todo 功能完善 -->
<template>
  <div class="navbar">
    <div class="left">
      <img class="logo" src="../../assets/logo.svg" alt="" />
      <p>community admin dashboard</p>
      <!-- 面包屑 -->
    </div>
    <div class="right">
      <p>John Doe</p>
      <el-button class="log-out" @click="handleLogout">退出登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleLogout = () => {
  localStorage.setItem("token", "");
  router.replace("/login");
};
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 25px;
  background: #001529;
  color: #ffffff;
  .left {
    display: flex;
    align-items: center;
    .logo {
      width: 20px;
      margin-right: 15px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .log-out {
      margin-left: 15px;
    }
  }
}
</style>
