import { StateType } from "@/@types";
import { Module } from "vuex";

const state = {
  language: "zhCN",
};
type AppStateType = typeof state;

const app: Module<AppStateType, StateType> = { namespaced: true, ...state };

export { AppStateType, state };
export default app;
