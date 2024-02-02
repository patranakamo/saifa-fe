<template>
  <apexchart
    type="line"
    height="300"
    :options="revenueChart"
    :series="revenue"
  ></apexchart>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThisWeekChart",
  data: function () {
    return {
      revenue: [
        {
          name: "Revenue",
          data: [20, 0, 20, 10, 30, 10, 40, 30, 50],
        },
      ],
      revenueChart: {
        chart: {
          height: 300,
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