<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Top Customer</h3>

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

      <ul class="ps-0 mb-0 list-unstyled scroll-bar h-365">
        <li class="mb-3" v-for="customer in customers" :key="customer.id">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  :src="require(`../../../../assets/images/${customer.image}`)"
                  alt="Customer"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">{{ customer.name }}</h3>
                <span class="text-body">
                  Customer ID
                  {{ customer.customerId }}
                </span>
              </div>
            </div>
            <span class="text-body">{{ customer.status }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topCustomer from "./topCustomer.json";

export default defineComponent({
  name: "TopCustomer",
  data() {
    return {
      customers: topCustomer,
    };
  },
});
</script>