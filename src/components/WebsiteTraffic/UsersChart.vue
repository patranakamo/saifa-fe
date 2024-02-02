<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Users</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>Last Month</option>
          <option value="1">Last Month</option>
          <option value="2">This Year</option>
          <option value="3">Last Year</option>
        </select>
      </div>

      <apexchart
        type="line"
        height="292"
        :options="totalUser"
        :series="user"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersChart",
  data: function () {
    return {
      user: [
        {
          name: "User",
          data: [0, 10, 20, 30, 40, 50],
        },
        {
          name: "Compare Period",
          data: [0, 20, 30, 40, 50],
        },
      ],
      totalUser: {
        chart: {
          height: 292,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#2ED47E", "#5C61F2"],
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