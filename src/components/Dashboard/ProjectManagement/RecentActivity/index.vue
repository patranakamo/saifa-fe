<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Recent Activity</h3>
        <ul
          class="ps-0 mb-0 list-unstyled d-flex week-list nav nav-pills"
          id="pills-tab3"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0 active"
              id="pills-this-week1-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-this-week1"
              type="button"
              role="tab"
              aria-controls="pills-this-week1"
              aria-selected="true"
            >
              Day
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0"
              id="pills-last-week1-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-last-week1"
              type="button"
              role="tab"
              aria-controls="pills-last-week1"
              aria-selected="true"
            >
              Week
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body rounded-0"
              id="pills-last-month1-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-last-month1"
              type="button"
              role="tab"
              aria-controls="pills-last-month1"
              aria-selected="true"
            >
              Month
            </button>
          </li>
        </ul>
      </div>

      <div class="tab-content scroll-bar h-387" id="pills-tabContent3">
        <div
          class="tab-pane fade show active"
          id="pills-this-week1"
          role="tabpanel"
          aria-labelledby="pills-this-week1-tab"
          tabindex="0"
        >
          <DailyActivity />
        </div>
        <div
          class="tab-pane fade"
          id="pills-last-week1"
          role="tabpanel"
          aria-labelledby="pills-last-week1-tab"
          tabindex="0"
        >
          <WeeklyActivity />
        </div>
        <div
          class="tab-pane fade"
          id="pills-last-month1"
          role="tabpanel"
          aria-labelledby="pills-last-month1-tab"
          tabindex="0"
        >
          <MonthlyActivity />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DailyActivity from "./DailyActivity.vue";
import WeeklyActivity from "./WeeklyActivity.vue";
import MonthlyActivity from "./MonthlyActivity.vue";

export default defineComponent({
  name: "RecentActivity",
  components: {
    DailyActivity,
    WeeklyActivity,
    MonthlyActivity,
  },
});
</script>