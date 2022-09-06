import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      // name: "home",
      // redirect: "/dashboard",
      component: () => import(/* webpackChunkName: "dashboard" */ "@/layout/index.vue"),
      children: [
        {
          path: "/itemOne",
          name: "itemOne",
          component: () => import("@/views/ItemOne.vue"),
        },
        {
          path: "/itemTwo",
          name: "itemTwo",
          component: () => import("@/views/ItemTwo.vue"),
        },
        {
          path: "/404",
          name: "404",
          component: () => import("@/layout/components/404.vue"),
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.vue"),
    },
  ],
});

export default router;
