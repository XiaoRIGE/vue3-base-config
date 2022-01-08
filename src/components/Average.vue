<!--
 * @Author: your name
 * @Date: 2021-08-11 11:33:30
 * @LastEditTime: 2021-08-11 11:39:36
 * @LastEditors: Please set LastEditors
 * @Description: 平均分组件
 * @FilePath: \collage-admin\src\components\global\Average.vue
-->
<template>
  <div class="number-box">
    <div class="header">
      <p class="average">全校平均分</p>
      <p class="grade">{{ allSchoolAverage }}分</p>
    </div>
    <div class="content">
      <span>男生：{{ men }}分</span>
      <span>女生：{{ women }}分</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect, toRefs } from "vue";
interface averageMarks {
  allSchoolAverage: number;
  men: number;
  women: number;
}
export default defineComponent({
  props: {
    // 图表数据
    averageData: {
      type: Object,
      default: () => ({
        allSchoolAverage: 90, //全校平均分
        men: 20, //男生分数
        women: 30, //女生分数
      }),
    },
  },
  setup(props: {
    averageData: { allSchoolAverage: any; men: any; women: any };
  }) {
    const averageMarks: averageMarks = reactive({
      allSchoolAverage: 0, //全校平均分
      men: 0, //男生分数
      women: 0, //女生分数
    });
    watchEffect(() => {
      averageMarks.allSchoolAverage = props.averageData.allSchoolAverage;
      averageMarks.men = props.averageData.men;
      averageMarks.women = props.averageData.women;
    });

    return { ...toRefs(averageMarks) };
  },
});
</script>

<style lang="less" scoped>
.number-box {
  padding: 40px 20px;
  font-size: 18px;
  .header {
    text-align: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 50px;
    .average {
      color: #ccc;
    }
    .grade {
      font-size: 30px;
      font-weight: 700;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
  }
}
</style>
