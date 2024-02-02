<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Project Distribution</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">This Year</option>
          <option value="3">Last Year</option>
        </select>
      </div>

      <apexchart
        type="pie"
        height="305"
        :options="projectDistribution"
        :series="project"
      ></apexchart>

      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <ul
            class="legend-list2 ps-0 mb-1 mb-lg-0 mb-md-0 mb-sm-0 list-unstyled"
          >
            <li class="text-body mb-1">Documentation</li>
            <li class="text-body mb-1">Project Management</li>
            <li class="text-body">Coding</li>
          </ul>
        </div>
        <div class="col-lg-6 col-sm-6">
          <ul class="legend-list2 two ps-0 mb-0 list-unstyled">
            <li class="text-body mb-1">Testing</li>
            <li class="text-body mb-1">Construction</li>
            <li class="text-body">Other</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectDistributionChart",
  data: function () {
    return {
      project: [20, 5, 40, 10, 15, 10],
      projectDistribution: {
        chart: {
          width: 305,
          type: "pie",
        },
        labels: [
          "Documentation",
          "Project Management",
          "Coding",
          "Testing",
          "Construction",
          "Other",
        ],
        colors: [
          "#CACFFF",
          "#5C61F2",
          "#5C61F2",
          "#7A7FFF",
          "#989DFF",
          "#B6BBFF",
        ],
        legend: {
          show: false,
          position: "bottom",
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
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            colors: undefined,
            useSeriesColors: false,
          },
        },
        dataLabels: {
          style: {
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: "400",
            colors: ["#fff"],
          },
          dropShadow: {
            enabled: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
      },
    };
  },
});
</script>