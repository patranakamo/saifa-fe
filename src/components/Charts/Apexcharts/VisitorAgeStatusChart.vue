<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Visitor Age Status</h3>
      </div>

      <apexchart
        type="bar"
        height="315"
        :options="visitorAgeStatus"
        :series="visitor"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VisitorAgeStatusChart",
  data: function () {
    return {
      visitor: [
        {
          data: [50, 80, 60, 40, 30, 20],
        },
      ],
      visitorAgeStatus: {
        chart: {
          height: 315,
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
          "#5C61F2",
          "#D6D7FC",
          "#D6D7FC",
          "#D6D7FC",
          "#D6D7FC",
          "#D6D7FC",
          "#D6D7FC",
        ],
        fill: {
          opacity: 1,
        },
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
          categories: ["10-20", "20-30", "30-40", "40-50", "50-60", "60-80"],
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