import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  persist: true, //是否需要持久化
  id: "counter",
  state: () => ({
    counter: 0,
    token: "",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    setToken(val: string) {
      this.token = val;
    },
  },
});
