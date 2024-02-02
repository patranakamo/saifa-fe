<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-0"
      >
        <h3 class="fw-medium fs-18 mb-0">Project Roadmap</h3>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex week-list nav nav-pills"
          id="pills-tab2"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0 active"
              id="pills-week-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-week"
              type="button"
              role="tab"
              aria-controls="pills-week"
              aria-selected="true"
            >
              Week
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0"
              id="pills-month-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-month"
              type="button"
              role="tab"
              aria-controls="pills-month"
              aria-selected="true"
            >
              Month
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0"
              id="pills-year-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-year"
              type="button"
              role="tab"
              aria-controls="pills-year"
              aria-selected="true"
            >
              Year
            </button>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent2">
        <div
          class="tab-pane fade show active"
          id="pills-week"
          role="tabpanel"
          aria-labelledby="pills-week-tab"
          tabindex="0"
        >
          <WeeklyChart />
        </div>
        <div
          class="tab-pane fade"
          id="pills-month"
          role="tabpanel"
          aria-labelledby="pills-month-tab"
          tabindex="0"
        >
          <MonthlyChart />
        </div>
        <div
          class="tab-pane fade"
          id="pills-year"
          role="tabpanel"
          aria-labelledby="pills-year-tab"
          tabindex="0"
        >
          <YearlyChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeeklyChart from "./WeeklyChart.vue";
import MonthlyChart from "./MonthlyChart.vue";
import YearlyChart from "./YearlyChart.vue";

export default defineComponent({
  name: "ProjectRoadmapChart",
  components: {
    WeeklyChart,
    MonthlyChart,
    YearlyChart,
  },
});
</script>