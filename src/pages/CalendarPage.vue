<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row">
        <div class="col-lg-7 col-xxl-8">
          <CalendarMain />
        </div>

        <div class="col-lg-5 col-xxl-4">
          <CalendarContent />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalendarMain from "../components/Calendar/CalendarMain.vue";
import CalendarContent from "../components/Calendar/CalendarContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CalendarPage",
  components: {
    CalendarMain,
    CalendarContent,
    MainFooter,
  },
});
</script>