<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-0">
      <div class="p-4 pb-0">
        <div class="card-title d-flex justify-content-between mb-0">
          <div>
            <h3 class="fw-medium fs-18 mb">Customer Visit Online</h3>
            <h2 class="fs-30 fw-medium mb-0">69,874</h2>
          </div>
        </div>
      </div>

      <apexchart
        type="area"
        height="100"
        :options="customerVisitors"
        :series="customer"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerVisitOnlineChart",
  data: function () {
    return {
      customer: [
        {
          name: "Total User",
          data: [50, 80, 40, 80, 50, 100, 150, 100, 50, 80, 40, 80, 50],
        },
      ],
      customerVisitors: {
        chart: {
          type: "area",
          height: 100,
          sparkline: {
            enabled: !0,
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        colors: ["#2ED47E"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [25, 100, 100, 100],
          },
        },
        tooltip: {
          fixed: {
            enabled: !1,
          },
          x: {
            show: !1,
          },
          marker: {
            show: !1,
          },
        },
      },
    };
  },
});
</script>