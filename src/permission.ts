import router from "./router/index";
import type { RouteLocationNormalized } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// import { useCounterStore } from "./stores/counter";
// const counter = useCounterStore();

NProgress.configure({ showSpinner: false });

const whiteList = ["/login"];

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  // Start progress bar
  NProgress.start();

  console.log("to", to);
  console.log("from", from);

  const { matched } = to;
  const isMatched = !!matched.length;

  //匹配到路由
  if (isMatched) {
    // todo 根据token是否有值决定是否跳转登录页
    // todo 这里拿不到store数据（pinia未初始化）
    // 替代方案 使用localStorage
    const token = localStorage.getItem("token");
    if (token) {
      console.log("存在token");
      next();
    } else {
      if (whiteList.includes(to.path)) {
        next();
      } else {
        next({ name: "login" });
      }
    }
  } else {
    next({ name: "404" });
  }
});

router.afterEach((to: RouteLocationNormalized) => {
  // End progress bar
  NProgress.done();
  console.log("to", to);
});
