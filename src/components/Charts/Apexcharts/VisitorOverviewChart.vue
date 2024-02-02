<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Visitor Overview</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>Year 2023</option>
          <option value="1">Year 2022</option>
          <option value="2">Year 2021</option>
          <option value="3">Year 2020</option>
        </select>
      </div>

      <apexchart
        type="line"
        height="435"
        :options="visitorOverviewChart"
        :series="visitors"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VisitorOverviewChart",
  data: function () {
    return {
      visitors: [
        {
          name: "New visit",
          data: [75, 150, 200, 100, 150, 100, 250, 150, 200, 100, 200, 150],
        },
        {
          name: "Average visit",
          data: [50, 100, 150, 50, 200, 75, 100, 150, 200, 175, 75, 275],
        },
      ],
      visitorOverviewChart: {
        chart: {
          height: 435,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#5C61F2", "#2ED47E"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 2],
          curve: "smooth",
          dashArray: [4, 0],
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
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
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
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val: string) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val: string) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val: string) {
                  return val;
                },
              },
            },
          ],
        },
      },
    };
  },
});
</script>