import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demo-page",
    name: "DemoPage",
    // webpackChunkName 相同的组件将会被打包到同一个文件中
    component: () =>
      import(/* webpackChunkName: "moduleA" */ "../views/DemoPage.vue"),
  },
  {
    path: "/demo-page1",
    name: "DemoPage1",

    component: () =>
      import(/* webpackChunkName: "moduleB" */ "../views/DemoPage1.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
