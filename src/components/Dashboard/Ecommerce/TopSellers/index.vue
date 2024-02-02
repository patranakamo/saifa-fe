<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Top Sellers</h3>

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
        <li class="mb-3" v-for="seller in sellers" :key="seller.id">
          <div class="d-sm-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  :src="require(`../../../../assets/images/${seller.image}`)"
                  alt="user-15"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Chester Burress</h3>
                <div class="star">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <span class="text-body">({{seller.rating}})</span>
                </div>
              </div>
            </div>
            <span class="text-body mt-2 mt-sm-0 d-block">
              Customer ID {{seller.customerID}}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import topSellers from './topSellers.json'

export default defineComponent({
  name: "TopSellers",
  data(){
    return {
      sellers: topSellers
    }
  },
});
</script>