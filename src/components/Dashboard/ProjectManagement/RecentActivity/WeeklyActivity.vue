<template>
  <ul class="activity-list ps-0 mb-0 list-unstyled scroll-bar h-400">
    <li v-for="activitie in activities" :key="activitie.id">
      <div class="date-title">
        <span class="fs-14 fw-medium mb-1 text-body">{{ activitie.date }}</span>
        <span class="text-dark">{{ activitie.time }} ago</span>
      </div>
      <p class="fs-14">
        {{ activitie.description }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import recentActivity from "./recentActivity.json";

export default defineComponent({
  name: "WeeklyActivity",
  data() {
    return {
      activities: recentActivity,
    };
  },
});
</script>