<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div class="card-title d-flex justify-content-between mb-0">
        <h3 class="fw-medium fs-18 mb-0">User Device</h3>

        <ul class="ps-0 mb-0 list-unstyled get-user-list">
          <li class="text-body mb-1">Desktop</li>
          <li class="text-body mb-1">Mobile</li>
          <li class="text-body mb-1">Laptop</li>
        </ul>
      </div>

      <v-chart
        style="height: 270px"
        class="chart"
        :option="option"
        autoresize
      />

      <ul
        class="d-flex justify-content-between ps-0 mb-0 list-unstyled user-device mt-3"
      >
        <li>
          <span class="d-block text-body mb-2">Desktop user</span>
          <span class="d-block text-primary">50%</span>
        </li>
        <li>
          <span class="d-block text-body mb-2">Mobile user</span>
          <span class="d-block text-primary">30%</span>
        </li>
        <li>
          <span class="d-block text-body mb-2">Laptop user</span>
          <span class="d-block text-primary">20%</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY);

const option = ref({
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
    orient: "vertical",
    left: "right",
    top: "0",
  },
  color: ["#5C61F2", "#989DFF", "#CACFFF"],
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 50, name: "50%" },
        { value: 30, name: "30%" },
        { value: 20, name: "20%" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>