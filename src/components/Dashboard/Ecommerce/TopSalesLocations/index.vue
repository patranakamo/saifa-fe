<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 locations">
    <div class="card-body p-4">
      <div class="card-title mb-3">
        <h3 class="fw-medium fs-18 mb-0">Top Sales Locations</h3>
      </div>

      <div class="text-center">
        <img
          style="height: 212px"
          src="../../../../assets/images/top-countries-map.png"
          alt="Map"
        />
      </div>

      <TopCountries />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopCountries from "./TopCountries/index.vue";

export default defineComponent({
  name: "TopSalesLocations",
  components: {
    TopCountries,
  },
});
</script>