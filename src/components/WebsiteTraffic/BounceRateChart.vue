<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-0">
      <div class="p-4 pb-0">
        <div class="card-title d-flex justify-content-between mb-0">
          <div>
            <h3 class="fw-medium fs-18 mb">Bounce Rate</h3>
            <h2 class="fs-30 fw-medium mb-0">12.5%</h2>
          </div>
          <div>
            <span class="border bg btn-outline-danger py-1 px-1">
              <vue-feather
                type="arrow-down"
                style="width: 15px; position: relative; top: 3px"
              ></vue-feather>
              1.20%
            </span>
          </div>
        </div>
      </div>

      <apexchart
        type="area"
        height="100"
        :options="bounceRate"
        :series="rate"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BounceRateChart",
  data: function () {
    return {
      rate: [
        {
          name: "Bounce Rate",
          data: [100, 200, 50, 100, 150, 80, 200, 250, 100, 160, 40, 150, 200],
        },
      ],
      bounceRate: {
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
        colors: ["#ED4C5C"],
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