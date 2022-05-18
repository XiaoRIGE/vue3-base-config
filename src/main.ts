import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log("全局错误捕获", err);
};

app.use(createPinia());
app.use(router);

app.mount("#app");
