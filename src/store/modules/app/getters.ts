/**
 * 当前模块的getter封装
 */
export default {
  currentLangUage: (state: any, test: any) => {
    console.log("state", state);
    console.log("test", test);

    return state["language"] + "_____getter后缀";
  },
};
