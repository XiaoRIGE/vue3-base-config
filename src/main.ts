import { createApp } from "vue";
import { createPinia } from "pinia"; //状态管理机
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //pinia数据持久化

import App from "./App.vue";
import router from "./router";

import "./permission";

import "./assets/main.css";
import "./styles/index.scss";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount("#app");
