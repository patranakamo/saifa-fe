<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <NotificationsContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotificationsContent from "../components/Notifications/NotificationsContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "NotificationsPage",
  components: {
    NotificationsContent,
    MainFooter,
  },
});
</script>