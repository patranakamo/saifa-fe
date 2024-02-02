<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-0">
      <div class="p-4 pb-0">
        <div class="card-title d-flex justify-content-between mb-0">
          <div>
            <h3 class="fw-medium fs-18 mb">Page Views</h3>
            <h2 class="fs-30 fw-medium mb-0">26,852</h2>
          </div>
          <div>
            <span class="border bg btn-outline-success py-1 px-1">
              <vue-feather
                type="arrow-up"
                style="width: 15px; position: relative; top: 3px"
              ></vue-feather>
              55%
            </span>
          </div>
        </div>
      </div>

      <apexchart
        type="area"
        height="100"
        :options="pageViews"
        :series="views"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageViewsChart",
  data: function () {
    return {
      views: [
        {
          name: "Page Views",
          data: [50, 70, 90, 110, 130, 180, 210, 250, 80, 50, 100, 150, 100],
        },
      ],
      pageViews: {
        chart: {
          type: "area",
          height: 100,
          sparkline: {
            enabled: !0,
          },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        colors: ["#5C61F2"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [25, 100, 100, 100],
          },
        },
        tooltip: {
          fixed: {
            enabled: !1,
          },
          x: {
            show: !1,
          },
          marker: {
            show: !1,
          },
        },
      },
    };
  },
});
</script>