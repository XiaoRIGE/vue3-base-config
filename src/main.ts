import { createApp } from "vue";
import App from "./App.vue";
import { loadAllPlugins } from "@/plugins";
import router from "./router";
import store from "./store";
import { registerGlobalComponent } from "@/components/index";
import "./styles/index.less";

const app = createApp(App);

/** 加载所有 Plugins */
loadAllPlugins(app);

/** 全局注册组件--components/global目录下组件 */
registerGlobalComponent(app);

app.use(store).use(router).mount("#app");
