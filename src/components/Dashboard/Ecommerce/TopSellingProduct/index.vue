<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Top Selling Product</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">Last Week</option>
          <option value="2">This Month</option>
          <option value="3">Last Month</option>
        </select>
      </div>

      <ul class="ps-0 mb-0 list-unstyled scroll-bar h-839">
        <li
          class="mb-3 pb-3 border-bottom border-color"
          v-for="product in products"
          :key="product.id"
        >
          <a
            href="#"
            class="d-sm-flex justify-content-between align-items-center text-decoration-none"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-50 rounded-2"
                  :src="require(`../../../../assets/images/${product.image}`)"
                  alt="product-1"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">{{ product.title }}</h3>
                <span class="text-body fs-14">${{ product.price }}</span>
              </div>
            </div>
            <span class="text-body fs-14 d-block mt-2">
              {{ product.sales }} Sales
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topSellingProduct from "./topSellingProduct.json";

export default defineComponent({
  name: "TopSellingProduct",
  data() {
    return {
      products: topSellingProduct,
    };
  },
});
</script>

<style>
.normal-class {
  color: red;
}

.special-class {
  color: #00ff2a;
}

.high-class {
  color: red;
}
.highlight-class {
  color: green;
}
</style>