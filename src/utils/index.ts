import { message } from "ant-design-vue";

export const add = (a: number, b: number) => {
  return a + b;
};

export const reduce = (a: number, b: number) => {
  return a - b;
};

export const $message = message;
