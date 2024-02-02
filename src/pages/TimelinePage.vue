<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <TimelineContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimelineContent from "../components/Timeline/TimelineContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "TimelinePage",
  components: {
    TimelineContent,
    MainFooter,
  },
});
</script>