<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-0">
      <div class="p-4 pb-0">
        <div class="card-title d-flex justify-content-between mb-0">
          <div>
            <h3 class="fw-medium fs-18 mb">Daily User</h3>
            <h2 class="fs-30 fw-medium mb-0">14,320</h2>
          </div>
          <div>
            <span class="border bg btn-outline-success py-1 px-1">
              <vue-feather
                type="arrow-up"
                style="width: 15px; position: relative; top: 3px"
              ></vue-feather>
              25%
            </span>
          </div>
        </div>
      </div>

      <apexchart
        type="area"
        height="100"
        :options="dailyUser"
        :series="user"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DailyUserChart",
  data: function () {
    return {
      user: [
        {
          name: "Daily User",
          data: [50, 100, 80, 180, 60, 120, 90, 180, 100, 200, 40, 80, 50],
        },
      ],
      dailyUser: {
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
        colors: ["#FFBA5C"],
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