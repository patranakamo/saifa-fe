<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Total Earning</h3>

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

      <div id="total_earning"></div>

      <apexchart
        type="radar"
        height="330"
        :options="totalEarning"
        :series="total"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalEarningChart",
  data: function () {
    return {
      total: [
        {
          name: "Total Earning",
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
      totalEarning: {
        chart: {
          height: 330,
          type: "radar",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: "#EFEFFE",
              fill: {
                colors: ["#FAFAFE", "#ffffff"],
              },
            },
          },
        },
        colors: ["#5C61F2"],
        markers: {
          size: 4,
          colors: ["#5C61F2"],
          strokeColor: "#5C61F2",
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val: unknown) {
              return val;
            },
          },
        },
        xaxis: {
          categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
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
              ],
            },
          },
        },
        yaxis: {
          tickAmount: 7,
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
              ],
            },
            formatter: function (val: unknown, i: number) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            },
          },
        },
      },
    };
  },
});
</script>