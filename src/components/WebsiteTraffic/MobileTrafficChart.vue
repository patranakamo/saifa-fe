<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Mobile Traffic</h3>

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

      <apexchart
        type="bar"
        height="396"
        :options="weeklyEarning"
        :series="earning"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileTrafficChart",
  data: function () {
    return {
      earning: [
        {
          data: [40, 80, 60, 90, 80, 60, 40],
        },
      ],
      weeklyEarning: {
        chart: {
          height: 396,
          type: "bar",
          events: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            click: function (_chart: unknown, _w: unknown, _e: unknown) {
              // console.log(chart, w, e)
            },
          },
          toolbar: {
            show: false,
          },
        },
        colors: [
          "#D6D7FC",
          "#D6D7FC",
          "#D6D7FC",
          "#5C61F2",
          "#D6D7FC",
          "#D6D7FC",
          "#D6D7FC",
        ],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"],
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
            style: {
              colors: [
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
                "#171825",
              ],
            },
          },
        },
        grid: {
          borderColor: "#EFEFFE",
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
      },
    };
  },
});
</script>