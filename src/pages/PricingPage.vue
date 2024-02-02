<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <PricingContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PricingContent from "../components/Pricing/PricingContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    PricingContent,
    MainFooter,
  },
});
</script>