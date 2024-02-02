<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-0"
      >
        <h3 class="fw-medium fs-18 mb-0">Revenue</h3>
      </div>

      <div
        class="tab-pane fade show active"
        id="pills-this-week"
        role="tabpanel"
        aria-labelledby="pills-this-week-tab"
        tabindex="0"
      >
        <apexchart
          type="line"
          height="306"
          :options="revenueChart"
          :series="revenue"
        ></apexchart>
      </div>

      <ul class="ps-0 mb-0 list-unstyled d-flex justify-content-between">
        <li class="text-dark">
          Target:
          <span class="text-primary">$12k</span>
        </li>
        <li class="text-dark">
          This Week:
          <span class="text-success">$2.3k</span>
        </li>
        <li class="text-dark">
          Last Week:
          <span class="text-success">$1.7</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RevenueChart",
  data: function () {
    return {
      revenue: [
        {
          name: "Revenue",
          data: [20, 0, 20, 10, 30, 10, 40],
        },
      ],
      revenueChart: {
        chart: {
          height: 306,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#5C61F2"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        grid: {
          borderColor: "rgba(92, 97, 242, 0.25)",
          row: {
            colors: ["#F4F6FA", "transparent"], // takes an array which will be repeated on columns
            opacity: 1,
          },
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          labels: {
            style: {
              colors: [
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
                "#919AA3",
              ],
            },
          },
        },

        yaxis: {
          labels: {
            formatter: (val: number) => {
              return "$" + val / 1;
            },
            style: {
              colors: [
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
                "#A9A9C8",
              ],
            },
          },
        },
      },
    };
  },
});
</script>