<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Total Sales</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>Year 2022</option>
          <option value="1">Year 2023</option>
          <option value="2">Year 2024</option>
          <option value="3">Year 2025</option>
        </select>
      </div>

      <apexchart
        type="area"
        height="300"
        :options="totalSales"
        :series="total"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalSalesChart",
  data: function () {
    return {
      total: [
        {
          name: "Orders",
          data: [30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60],
        },
        {
          name: "Sales",
          data: [40, 80, 40, 80, 40, 80, 40, 80, 40, 80, 40, 80],
        },
      ],
      totalSales: {
        chart: {
          height: 300,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#2ED47E", "#5C61F2"],
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
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
        legend: {
          position: "top",
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
            offsetX: -2,
            offsetY: 0,
          },
        },
      },
    };
  },
});
</script>