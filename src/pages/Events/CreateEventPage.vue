<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <CreateEvent />
        </div>

        <div class="col-lg-4">
          <TicketPricing />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateEvent from "../../components/Events/CreateEvent/CreateEvent.vue";
import TicketPricing from "../../components/Events/CreateEvent/TicketPricing.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CreateEventPage",
  components: {
    CreateEvent,
    TicketPricing,
    MainFooter,
  },
});
</script>