<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 locations">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Top Countries</h3>

        <span class="text-body fs-14 fw-medium">Total visits 70984</span>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="me-4 py-2">
            <img src="../../../../assets/images/top-countries-map.png" alt="" />
          </div>
        </div>

        <div class="col-lg-5">
          <TopCountries />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopCountries from "./TopCountries/index.vue";

export default defineComponent({
  name: "TopCountriesLocations",
  components: {
    TopCountries,
  },
});
</script>