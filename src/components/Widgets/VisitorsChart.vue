<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Visitors</h3>

        <div class="d-flex align-items-center">
          <span class="fs-14 fw-medium text-body me-2">85,579</span>
          <span class="border bg btn-outline-success pt-1 px-1">
            <vue-feather
              type="arrow-up"
              style="width: 15px; position: relative; top: 3px"
            ></vue-feather>
            5.75%
          </span>
        </div>

        <select
          class="form-select border-0 w-70"
          aria-label="Default select example"
        >
          <option selected>2023</option>
          <option value="1">2022</option>
          <option value="2">2021</option>
          <option value="3">2020</option>
        </select>
      </div>

      <apexchart
        type="line"
        height="169"
        :options="visitorsChart"
        :series="visitors"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VisitorsChart",
  data: function () {
    return {
      visitors: [
        {
          name: "Visitors",
          type: "column",
          data: [200, 400, 450, 300, 100, 550, 200, 230, 250, 300, 300, 500],
        },
      ],
      visitorsChart: {
        chart: {
          height: 169,
          type: "line",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        colors: ["#5C61F2"],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
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
              show: false,
            },
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: function (y: any) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
        },
      },
    };
  },
});
</script>