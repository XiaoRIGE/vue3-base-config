import { createApp } from "vue";
import App from "./App.vue";
import { loadAllPlugins } from "@/plugins";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

/** 加载所有 Plugins */
loadAllPlugins(app);

app.use(store).use(router).mount("#app");
