<template>
  <h1>登录页面</h1>
  <RouterLink to="/">home</RouterLink>

  <el-button @click="handleLogin"> 快速登录 </el-button>
  <el-button @click="handleLogout"> 退出登录 </el-button>
  <el-button> {{ counter.counter }} </el-button>
  <el-button> {{ counter.token }} </el-button>
</template>
<script lang="ts" setup>
import { useCounterStore } from "../../stores/counter";
import { useRouter, RouterLink } from "vue-router";

console.log("登录页面", useCounterStore);

const counter = useCounterStore();

const router = useRouter();
const goHome = () => router.push("/");

const handleLogin = () => {
  // console.log(useCounterStore.increment());
  counter.increment();
  counter.setToken("bufudawoa");
  localStorage.setItem("token", "bufadawoa");
  goHome();
};
const handleLogout = () => {
  localStorage.setItem("token", "");
  counter.setToken("");
};
</script>
