<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 locations">
    <div class="card-body p-4">
      <h3 class="fw-medium fs-18 mb-0">Country Stats</h3>
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="me-4">
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
import TopCountries from "../CountryStats/TopCountries/index.vue";

export default defineComponent({
  name: "CountryStats",
  components: {
    TopCountries,
  },
});
</script>