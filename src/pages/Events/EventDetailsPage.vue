<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <EventDetails />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventDetails from "../../components/Events/EventDetails/EventDetails.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "EventDetailsPage",
  components: {
    EventDetails,
    MainFooter,
  },
});
</script>