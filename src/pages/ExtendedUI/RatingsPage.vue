<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <RatingsContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
import RatingsContent from "../../components/ExtendedUI/Ratings/RatingsContent.vue";

export default defineComponent({
  name: "RatingsPage",
  components: {
    MainFooter,
    RatingsContent,
  },
});
</script>