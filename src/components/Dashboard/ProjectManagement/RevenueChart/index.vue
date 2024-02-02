<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-0"
      >
        <h3 class="fw-medium fs-18 mb-0">Revenue</h3>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex week-list nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0 active"
              id="pills-this-week-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-this-week"
              type="button"
              role="tab"
              aria-controls="pills-this-week"
              aria-selected="true"
            >
              This Week
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0"
              id="pills-last-week-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-last-week"
              type="button"
              role="tab"
              aria-controls="pills-last-week"
              aria-selected="true"
            >
              Last Week
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0"
              id="pills-last-month-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-last-month"
              type="button"
              role="tab"
              aria-controls="pills-last-month"
              aria-selected="true"
            >
              Last Month
            </button>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-this-week"
          role="tabpanel"
          aria-labelledby="pills-this-week-tab"
          tabindex="0"
        >
          <ThisWeekChart />
          <p class="mb-0 text-end text-dark">
            Weekend total revenue:
            <span class="text-success">$190</span>
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="pills-last-week"
          role="tabpanel"
          aria-labelledby="pills-last-week-tab"
          tabindex="0"
        >
          <LastWeekChart />
          <p class="mb-0 text-end text-dark">
            Weekend total revenue:
            <span class="text-success">$200</span>
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="pills-last-month"
          role="tabpanel"
          aria-labelledby="pills-last-month-tab"
          tabindex="0"
        >
          <LastMonthChart />
          <p class="mb-0 text-end text-dark">
            Weekend total revenue:
            <span class="text-success">$300</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThisWeekChart from "./ThisWeekChart.vue";
import LastWeekChart from "./LastWeekChart.vue";
import LastMonthChart from "./LastMonthChart.vue";

export default defineComponent({
  name: "RevenueChart",
  components: {
    ThisWeekChart,
    LastWeekChart,
    LastMonthChart,
  },
});
</script>