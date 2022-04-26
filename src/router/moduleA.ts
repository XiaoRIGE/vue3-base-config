import { RouteRecordRaw } from "vue-router";

/** APP配置路由 */
const GeneralRouter: RouteRecordRaw = {
  path: "/app_config",
  name: "AppConfig",
  component: () => import("@/views/moduleA/index.vue"),
  meta: {
    title: "APP配置",
  },
};

export default GeneralRouter;
