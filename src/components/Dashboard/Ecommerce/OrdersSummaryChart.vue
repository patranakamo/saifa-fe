<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Orders Summary</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">Last Week</option>
          <option value="2">This Month</option>
          <option value="3">Last Month</option>
        </select>
      </div>

      <div
        class="d-lg-flex d-md-flex d-sm-flex justify-content-between align-items-end"
      >
        <ul class="ps-0 mb-0 list-unstyled">
          <li class="text-body fs-14 mb-2">Completed 60%</li>
          <li class="text-body fs-14 mb-2">New Orders 25%</li>
          <li class="text-body fs-14">Pending 15%</li>
        </ul>
        <apexchart
          type="pie"
          height="300"
          :options="ordersSummary"
          :series="summary"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrdersSummaryChart",
  data: function () {
    return {
      summary: [60, 25, 15],
      ordersSummary: {
        chart: {
          width: 300,
          type: "pie",
        },
        labels: ["Completed", "New Orders", "Pending"],
        colors: ["#5C61F2", "#989DFF", "#CACFFF"],
        legend: {
          position: "right",
          horizontalAlign: "center",
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: 400,
          markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            fillColors: undefined,
            radius: 0,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            colors: undefined,
            useSeriesColors: false,
          },
        },
        dataLabels: {
          style: {
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: "400",
            colors: ["#fff"],
          },
          dropShadow: {
            enabled: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  },
});
</script>