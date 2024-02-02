<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title">
        <h4 class="text-dark fs-18 fw-medium mb-3">Min-Max Example</h4>
      </div>

      <div class="d-flex justify-content-between mb-2">
        <span id="min-value" class="d-block text-black fw-medium fs-13">
          ${{ minPrice }}
        </span>
        <span id="max-value" class="d-block text-black fw-medium fs-13">
          ${{ maxPrice }}
        </span>
      </div>
      <div class="range-slider">
        <input type="range" min="10" v-model="minPrice" @change="updateRange" />
        <input
          type="range"
          max="6000"
          v-model="maxPrice"
          @change="updateRange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const minPrice = ref(10);
const maxPrice = ref(6000);

function updateRange() {
  if (minPrice.value > maxPrice.value) {
    [minPrice.value, maxPrice.value] = [maxPrice.value, minPrice.value];
  }
}

watch([minPrice, maxPrice], () => {
  updateRange();
});
</script>