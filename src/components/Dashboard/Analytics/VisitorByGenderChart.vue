<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div class="card-title d-flex justify-content-between mb-3">
        <h3 class="fw-medium fs-18 mb-0">Visitor by Gender</h3>

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
        height="330"
        :options="visitorByGender"
        :series="gender"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VisitorByGenderChart",
  data: function () {
    return {
      gender: [
        {
          name: "Male",
          data: [40, 60, 38, 55, 80, 45, 40, 95],
        },
        {
          name: "Female",
          data: [80, 55, 95, 75, 60, 95, 60, 60],
        },
        {
          name: "Other",
          data: [10, 20, 17, 30, 20, 10, 20, 30],
        },
      ],
      visitorByGender: {
        chart: {
          type: "bar",
          height: 330,
          toolbar: {
            show: false,
          },
        },
        colors: ["#5C61F2", "#2ED47E", "#FFBA5C"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: 400,
          labels: {
            colors: "#919AA3",
          },
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