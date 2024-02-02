<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title d-flex justify-content-between mb-3">
        <h3 class="fw-medium fs-18 mb-0">Project Progress</h3>

        <ul class="ps-0 mb-0 list-unstyled legend-list">
          <li class="text-body mb-1">In Progress</li>
          <li class="text-body mb-1">Complete</li>
          <li class="text-body">Not Started</li>
        </ul>
      </div>

      <div id="project_progress"></div>
      <apexchart
        type="donut"
        height="374"
        :options="projectProgress"
        :series="project"
      ></apexchart>

      <ul
        class="d-flex justify-content-between ps-0 mb-0 list-unstyled progress-list mt-3"
      >
        <li>
          <span class="d-block text-body mb-2">In Progress</span>
          <span class="d-block text-success">60%</span>
        </li>
        <li>
          <span class="d-block text-body mb-2">Not Started</span>
          <span class="d-block text-warning">25%</span>
        </li>
        <li>
          <span class="d-block text-body mb-2">Complete</span>
          <span class="d-block text-danger">15%</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectProgressChart",
  data: function () {
    return {
      project: [70, 20, 10],
      projectProgress: {
        labels: ["In Progress", "Complete", "Not Started"],
        chart: {
          height: 374,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          fontSize: "12px",
          fontFamily: "Inter",
          position: "right",
          labels: {
            colors: ["#919AA3"],
          },
          markers: {
            radius: 0,
            width: 7,
            height: 7,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 5,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: "#fff",
          width: 0,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "70%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: undefined,
                  offsetY: 8,
                  // color: "#2ED47E",
                  fontWeight: 500,
                  formatter: function (val: string) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total Progress",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "#171825",
                },
              },
            },
          },
        },
        colors: ["#2ED47E", "#FFBA5C", "#ED4C5C"],
      },
    };
  },
});
</script>